<template>
    <div class="w-full h-full">
        <StatusBar :pcStatus="pcStatus" :setPcStatus="setPcStatus" />
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import StatusBar from './layouts/StatusBar.vue'
const props = defineProps({
    pcName: {
        type: String,
        required: true,
    },
    pcStatus: {
        type: Object,
        required: true,
    },
    setPcStatus: {
        type: Object,
        required: true,
    },
})
</script>
<style></style>