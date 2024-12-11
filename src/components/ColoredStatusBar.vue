<template>
    <div class="rounded-2xl" :style="{
        width: barWidth,
        height: barHeight,
        backgroundColor: bgColor,
    }">
        <div class="relative top-0 left-0 text-center" :style="currentBarStyle">
        </div>
        <div class="text-center w-full h-full relative" :style="{
            top: '-' + barHeight,
            color: fontColor,
            lineHeight: barHeight,
            fontSize: barHeight,
        }">{{ `${showValue ? value.toString() + '/'
            +
            maxValue.toString() : (showPercentage ? Math.round(value * 100 / maxValue) + '%' : '')}` }}
        </div>
    </div>
</template>
<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
    value: {
        type: Number,
        required: true,
    },
    maxValue: {
        type: Number,
        required: true,
    },
    barWidth: {
        type: String,
        default: '100%',
    },
    barHeight: {
        type: String,
        default: '10px',
    },
    maxColor: {
        type: String,
        default: 'rgb(0,255,0)',
    },
    minColor: {
        type: String,
        default: 'rgb(255,0,0)',
    },
    bgColor: {
        type: String,
        default: 'black',
    },
    fontColor: {
        type: String,
        default: 'white',
    },
    showValue: {
        type: Boolean,
        default: true,
    },
    showPercentage: {
        type: Boolean,
        default: false,
    },
})
const getCurrentBarColor = () => {
    const getColorParas = (colorString) => {
        let colorParas = colorString.split(',')
        const colorParasLeftBracket = colorParas[0].indexOf('(')
        const colorParasRightBracket = colorParas[2].indexOf(')')
        colorParas[0] = colorParas[0].slice(colorParasLeftBracket + 1, colorParas[0].length)
        colorParas[2] = colorParas[2].slice(0, colorParasRightBracket)
        return colorParas
    }
    const maxColorParas = getColorParas(props.maxColor)
    const minColorParas = getColorParas(props.minColor)
    const thisPercentage = props.value / props.maxValue
    const calculateCurrent = (maxValue, minValue, percentage) => {
        return Math.round(maxValue * percentage + minValue * (1 - percentage))
    }
    const thisColor = `rgb(${calculateCurrent(maxColorParas[0], minColorParas[0], thisPercentage)},
    ${calculateCurrent(maxColorParas[1], minColorParas[1], thisPercentage)},
    ${calculateCurrent(maxColorParas[2], minColorParas[2], thisPercentage)})`
    return thisColor
}
const currentBarStyle = computed(() => ({
    height: '100%',
    width: Math.round(props.value * 10000 / props.maxValue) / 100 + '%',
    backgroundColor: getCurrentBarColor(),
}))
</script>
<style></style>