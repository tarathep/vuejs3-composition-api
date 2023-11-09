<script lang="ts" setup>
import { ref, onMounted, watch, watchEffect } from "vue"
import { TimeLinePost } from '../posts';
import { marked } from "marked";

const props = defineProps<{
    post: TimeLinePost
}>()

const title = ref(props.post.title)
const content = ref(props.post.markdown)
const html = ref('')
const contentEditable = ref<HTMLDivElement>()

// watch+imediate TRUE IS SAME watchEffect

watchEffect(() => {
    let parseResult = marked.parse(content.value);
    html.value = parseResult
})

// watch(content, (newContent) => {
//     let parseResult = marked.parse(newContent);
//     html.value = parseResult
// },{
//     immediate: true
// })

onMounted(() => {
    if (!contentEditable.value) {
        throw Error('ContentEditable DOM node was not found')
    }
    contentEditable.value.innerText = content.value
})

function handleInput () {
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