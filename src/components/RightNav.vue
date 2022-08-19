<template>
    <div id="rightNav">
        <div class="circle" @click="ChangeShow">
            <img :src="getImageUrl(img1)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { showStore } from "../store/show";

// pinia
const store = showStore();

// 图片
const img1 = "1.png";

function getImageUrl(name: string): string {
    return new URL(`../assets/images/rightNav/${name}`, import.meta.url).href;
}

const ChangeShow = () => {
    store.isShow = !store.isShow;
};
</script>



<style scoped>
#rightNav {
    width: 100%;
    height: 100%;
}

.circle {
    cursor: pointer;
    text-align: center;
    margin: 20px auto;
    width: 50px;
    height: 50px;
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
    margin-top: 10px;
    width: 30px;
    height: 30px;
}
</style>