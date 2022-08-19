<template>
    <div id="leftNav">
        <div class="circle" :plain="true" @click="open1">
            <img :src="getImageUrl(img1)" />
        </div>
        <div class="circle" :plain="true" @click="open1">
            <img :src="getImageUrl(img2)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const open1 = () => {
  ElMessage('功能暂未开放')
}


const img1 = "1.png";
const img2 = "5.png";

function getImageUrl(name: string): string {
    return new URL(`../assets/images/leftNav/${name}`, import.meta.url).href;
}
</script>

<style scoped>
#leftNav {
    width: 100%;
    height: 100%;
}

.circle {
    cursor: pointer;
    text-align: center;
    margin: 20px auto;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    backdrop-filter: blur(10px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    background-color: var(--float-backgroundColor);
    transition: background-color 0.2s;
}

.circle:nth-of-type(1) {
    margin-top: 20px;
}

.circle:hover {
    background-color: var(--float-backgroundColor-hover);
}

img {
    margin-top: 17px;
    width: 35px;
    height: 35px;
}
</style>