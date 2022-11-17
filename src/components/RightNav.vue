<template>
    <div id="rightNav">
        <div class="circle" @click="ChangeShow">
            <img :src="getImageUrl(img1)" />
        </div>
        <transition name="rightNav" v-show="store.isShow">
            <div>
                <div class="circle" @click="ChangeTheme">
                    <img :src="getImageUrl(img3)" />
                </div>
                <div class="circle" @click="OpenSetting">
                    <img :src="getImageUrl(img2)" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { showStore } from "../store/show";
import { themeStore } from "../store/theme";

// 功能未开放提示
const open = (): void => {
    ElMessage({
        showClose: true,
        message: "加急开发中",
    });
};

const OpenSetting = () => {
    
}

// pinia
const store = showStore();
const themestore = themeStore();

// 图片
const img1: string = "1.png";
const img2: string = "2.png";
const img3: string = "3.png";

const getImageUrl = (name: string): string => {
    if (themestore.theme === "dark" || "") {
        return new URL(
            `../assets/images/dark/rightNav/${name}`,
            import.meta.url
        ).href;
    } else {
        return new URL(
            `../assets/images/light/rightNav/${name}`,
            import.meta.url
        ).href;
    }
};

const ChangeShow = (): void => {
    store.isShow = !store.isShow;
};

const ChangeTheme = () => {
    if (themestore.theme === "dark" || "") {
        themestore.theme = "light";
    } else {
        themestore.theme = "dark";
    }
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
    transition: background-color 0.3s;
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

.rightNav-enter-from,
.rightNav-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

.rightNav-enter-to,
.rightNav-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.rightNav-enter-active {
    transition: all 0.8s ease;
}

.rightNav-leave-active {
    transition: all 0.8s ease;
}
</style>