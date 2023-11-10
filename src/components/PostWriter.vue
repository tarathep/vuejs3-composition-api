<script lang="ts" setup>
import { ref, onMounted, watch } from "vue"
import { TimeLinePost } from '../posts';
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import highlightjs from 'highlight.js';


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

watch(content, (newContent) => {
    console.log(newContent);
    let parseResult = marked.parse(newContent,null);
    html.value = parseResult.toString()
}, {
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
</template>