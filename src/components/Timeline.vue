<script setup lang="ts">
import { ref } from "vue"

// DECARE TYPE
// type Period ="Today" | "This Week" | "This Month" 

// FOR DECLATE ARRAY TYPE AS STRING ARR
// const periods:string[] = ["A","Today", "This Week", "This Month"]

// For specfic type constant value of list
//const periods = ["A","Today", "This Week", "This Month"] as const

// FOR DECLARE TYPE OF periods
const periods = ["Today", "This Week", "This Month"] as const
type Period = typeof periods[number]

// FOR PUSH NEW VALUE TO LIST
// const periods = ["Today", "This Week", "This Month"]
// periods.push("A")

// For using specific type of Period
const selectedPeriod = ref<Period>("Today")


function selectPeriod(period: Period) {
    selectedPeriod.value = period
}

</script>

<template>
    <nav class="is-primary panel">
        <span class="panel-tabs">
            <a v-for="period of periods" :key="period" :class="{'is-active': period === selectedPeriod}" @click="selectPeriod(period)">
                {{ period }}
            </a>
        </span>
    </nav>
</template>