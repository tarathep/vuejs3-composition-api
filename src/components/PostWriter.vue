<script lang="ts" setup>
import { ref, onMounted, watch } from "vue"
import { TimeLinePost } from '../posts';
import { useRouter } from "vue-router";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import highlightjs from 'highlight.js';
import debounce from 'lodash/debounce';
import {usePosts} from "../stores/posts"


const props = defineProps<{
    post: TimeLinePost
}>()

const title = ref(props.post.title)
const content = ref(props.post.markdown)
const html = ref('')
const contentEditable = ref<HTMLDivElement>()
const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = highlightjs.getLanguage(lang) ? lang : 'plaintext';
            return highlightjs.highlight(code, { language }).value;
        }
    })
);
const posts = usePosts();
const router = useRouter();

function parseHtml (markdown: string) {
    let parseResult = marked.parse(markdown,null);
    html.value = parseResult.toString()
}


watch(content, debounce(parseHtml,250), {
    immediate: true
})

onMounted(() => {
    if (!contentEditable.value) {
        throw Error('ContentEditable DOM node was not found')
    }
    contentEditable.value.innerText = content.value
})

function handleInput() {
    if (!contentEditable.value) {
        throw Error('ContentEditable DOM node was not found')
    }
    content.value = contentEditable.value?.innerText
}

async function handleClick() {
    const newPost: TimeLinePost = {
        ...props.post,
        title: title.value,
        markdown: content.value,
        html: html.value
    }
    await posts.createPost(newPost)
    router.push("/")
}
</script>

<template>
    <div class="columns">
        <div class="column">
            <div class="field">
                <div class="label">Post title</div>
                <input type="text" class="input" v-model="title">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <div contenteditable ref="contentEditable" @input="handleInput" />
        </div>
        <div class="column">
            <div v-html="html"></div>
        </div>
    </div>

    <div class="column">
        <div class="column">
            <button class="button is-primary is-pulled-right" @click="handleClick">
                Save Post
            </button>
        </div>
    </div>
</template>