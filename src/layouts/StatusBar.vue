<template>
    <div class="absolute h-full w-[20%] top-0 left-0 z-[500]">
        <!-- 头像部分 -->
        <div class="w-full h-[25%]"></div>
        <!-- 状态部分 -->
        <div class="w-full h-[50%] bg-blue-500">
            1
            <ColoredStatusBar :value="300" :maxValue="1000" :showPercentage="true" />
            2
            <ColoredStatusBar :value="600" :maxValue="1000" :showPercentage="true" />
            3
            <ColoredStatusBar :value="900" :maxValue="1000" :showPercentage="true" />
        </div>
        <!-- 操作部分 -->
        <div class="w-full h-[25%]"></div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import ColoredStatusBar from '../components/ColoredStatusBar.vue'
const props = defineProps({
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