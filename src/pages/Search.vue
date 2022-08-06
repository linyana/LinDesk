<template>
    <div id="Search">
        <div class="search filter_box">
            <input
                type="text"
                v-model="search_content"
                placeholder="搜索"
                @keydown.enter="EnterSearch()"
            />
        </div>
        <div class="menu">
            <div class="box filter_box" v-for="box in boxes" :key="box.src" @click="Open(box.src)">
                <div class="box_img">
                    <img :src="getImageUrl(box.img)" alt="图片加载失败" />
                </div>
                <div class="box_text">{{box.text}}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const search_content = ref("");
const search_target = ref("https://www.baidu.com/s?wd=");
let target: string;

// 监视input框里的内容，赋值给target
watch(
    () => search_content,
    (newValue) => {
        target = search_target.value + search_content.value;
    },
    {
        immediate: true,
        deep: true,
    }
);

// 搜索
function EnterSearch(): void {
    window.open(target, "_self");
    search_content.value = "";
}

// 常用标签
const boxes:string[] = [
    {
        text: "百度",
        src: "https://www.baidu.com",
        img: "1.png",
    },
    {
        text: "bilibili",
        src: "https://www.bilibili.com/",
        img: "2.png",
    },
    {
        text: "Github",
        src: "https://github.com/",
        img: "3.png",
    },
    {
        text: "qq邮箱",
        src: "https://mail.qq.com/",
        img: "4.png",
    },
    {
        text: "有道翻译",
        src: "https://fanyi.youdao.com/",
        img: "5.png",
    },
    {
        text: "b站动态",
        src: "https://t.bilibili.com/",
        img: "6.png",
    },
    {
        text: "知乎",
        src: "https://www.zhihu.com/",
        img: "7.png",
    },
    {
        text: "图标库",
        src: "https://www.iconfont.cn/",
        img: "8.png",
    },
];

function Open(target: string):void {
    window.open(target, "_self");
}

function getImageUrl(name:string):string {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}
</script>

<style scoped>
#Search {
    margin: auto;
    width: 50%;
    max-width: 650px;
}

.filter_box {
    backdrop-filter: blur(20px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    background-color: var(--float-backgroundColor);
    padding: 10px;
}

.search {
    margin: auto;
    margin-top: 200px;
    width: 100%;
    height: 30px;
    border-radius: 15px;
}

.search input {
    width: 100%;
    border: none;
    background-color: transparent;
    border-radius: 10px;
    height: 30px;
    font-size: 19px;
    font-weight: 700;
    outline: 0px;
    color: var(--color);
    line-height: 30px;
    text-align: center;
    letter-spacing: 1px;
}

.menu {
    margin: auto;
    margin-top: 60px;
    width: 100%;
    height: 320px;
    border-radius: 15px;
    padding: 10px;
    transition: all 0.8s;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.menu:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
}

.box {
    cursor: pointer;
    width: 90px;
    height: 90px;
    border-radius: 10px;
    margin: 20px;
}

.box_img {
    margin-top: 22.5px;
    height: 80px;
    width: 100%;
    text-align: center;
}

.box_img img {
    width: 45px;
    height: 45px;
}

.box_text {
    position: absolute;
    bottom: -35px;
    left: 0;
    width: 120px;
    text-align: center;
    color: var(--default-color);
    font-weight: 700;
    font-size: 18px;
}
</style>