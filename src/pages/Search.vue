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
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
            <div class="box filter_box"></div>
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
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 20px;
}
</style>