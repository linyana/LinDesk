<template>
    <transition name="leftNav">
        <div id="leftNav" v-if="store.isShow">
            <div class="circle" :plain="true" @click="toSearch">
                <img :src="getImageUrl(img1)" />
            </div>
            <div class="circle" :plain="true" @click="toWeather">
                <img :src="getImageUrl(img2)" />
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { showStore } from "../store/show";
import { themeStore } from "../store/theme";

// pinia
const store = showStore();
const themestore = themeStore();

// 功能未开放提示
const open = (): void => {
    ElMessage({
        showClose: true,
        message: "加急开发中",
    });
};

// 路由
const router = useRouter();

const toSearch = () => {
    router.push("Search");
};

const toWeather = () => {
    router.push("Weather");
};

// 图片
const img1 = "1.png";
const img2 = "5.png";

const getImageUrl = (name: string): string => {
    if (themestore.theme === "dark" || "") {
        return new URL(
            `../assets/images/dark/leftNav/${name}`,
            import.meta.url
        ).href;
    } else {
        return new URL(
            `../assets/images/light/leftNav/${name}`,
            import.meta.url
        ).href;
    }
};
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
    width: 50px;
    height: 50px;
    border-radius: 70px;
    backdrop-filter: blur(10px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    background-color: var(--float-backgroundColor);
    transition: background-color 0.3s;
}

.circle:nth-of-type(1) {
    margin-top: 20px;
}

.circle:hover {
    background-color: var(--float-backgroundColor-hover);
}

img {
    margin-top: 13px;
    width: 25px;
    height: 25px;
}

.leftNav-enter-from,
.leftNav-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.leftNav-enter-to,
.leftNav-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.leftNav-enter-active {
    transition: all 0.8s ease;
}
.leftNav-leave-active {
    transition: all 0.8s ease;
}
</style>