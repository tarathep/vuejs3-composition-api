<script lang="ts" setup>
import { DateTime } from "luxon"
import PostWriter from "../components/PostWriter.vue"
import { TimeLinePost } from "../posts"

const post: TimeLinePost = {
    id: "-1",
    title: "Title",
    created: DateTime.now(),
    markdown: '## Title',
    html: '<h2>Title</h2>'
}
</script>

<template>
    New Post
    <PostWriter :post="post"/>
</template>