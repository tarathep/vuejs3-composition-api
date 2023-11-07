<script setup lang="ts">
const periods = ["Today", "This Week", "This Month"]
</script>

<template>
    <nav class="is-primary panel">
        <span class="panel-tabs">

            <!-- can use v-bind key -->
            <!-- <a v-for="period of periods"
            v-bind:key="period"
            ></a> -->

            <!-- can use v-bind class -->
            <!-- <a v-for="period of periods"
            v-bind:class="period"
            ></a> -->

            <!-- can use shot term to use v-bind  -->
            <a 
            v-for="period of periods"
            :key="period" 
            >
                {{ period }}
            </a>
        </span>
    </nav>
</template>