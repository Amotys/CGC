<template>
    <Game :pcStatus="pcStatus" :setPcStatus="setPcStatus" />
</template>

<script setup>
import { reactive } from 'vue';
import Game from './Game.vue'
// ================================
// ================================
// 测试数据
const pcName = '李超凡'
const pcStatus = reactive({
    健康: 2500,
    健康回复: 100,
    魔法: 50,
    魔法回复: 5,
    力量: 500,
    体质: 500,
    灵巧: 500,
    意志: 500,
    智慧: 500,
    魔力: 500,
    魅力: 500,
    幸运: 500,
    攻击: 150,
    防御: 150,
    移动: 5,
    先攻: 500,
    士气: 15,
    暴击: 10,
})
const setPcStatus = (key, value) => {
    pcStatus[key] = value
}
// ================================
// ================================
</script>

<style>
@import './assets/css/tailwind.css';

body {
    width: 100vw;
    height: 100vh;
    margin: 0;
}

#app {
    width: 100vw;
    height: 100vh;
}
</style>
