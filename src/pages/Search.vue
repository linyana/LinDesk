<template>
    <div id="Search">
        <div class="search">
            <input
                type="text"
                v-model="search_content"
                placeholder="搜索"
                @keydown.enter="EnterSearch()"
            />
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
.search {
    margin: auto;
    margin-top: 300px;
    width: 50%;
    max-width: 600px;
    height: 30px;
    background-color: var(--float-backgroundColor);
    box-shadow: 3px 3px 10px #00000050;
    backdrop-filter: blur(20px);
    border-radius: 15px;
    padding: 10px;
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
</style>