<template>
    <div id="weather">
        <div class="city_card" :style="isWriteStyle">
            <div class="now_city" v-if="!isWrite" @click="ShowInput">当前城市 : {{city}}</div>
            <input
                v-if="isWrite"
                v-model="cityInput"
                id="change_city_input"
                ref="refInput"
                @keydown.enter="EnterCityInput"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { cityStore } from "../store/city";

// pinia 记录城市
// store.city:城市
const store = cityStore();

let city = ref(store.city);
if (["", " ", null].includes(store.city)) {
    city.value = store.city = "成都";
}


// 输入框
const cityInput = ref(store.city);
let isWrite = ref(false);

let isWriteStyle = ref(`width: ${100 + 20 * city.value.length}px;`);

const ShowInput = () => {
    isWrite.value = true;
    isWriteStyle.value = "width: 400px;";
    getFocus();
};

const EnterCityInput = () => {
    isWrite.value = false;
    store.city = cityInput.value;
    city.value = store.city;
    isWriteStyle.value = `width: ${100 + 20 * city.value.length}px;`;
};

// 焦点
const refInput = ref();

const getFocus = async () => {
    nextTick(() => {
        refInput.value.focus();
    });
};
</script>

<style scoped>
#weather {
    width: 100%;
    height: 100%;
}

.city_card {
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 60px;
    background-color: var(--float-backgroundColor);
    backdrop-filter: blur(20px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 15px;
    transition: all 0.8s;
}

.now_city {
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-weight: 700;
    color: var(--color);
    letter-spacing: 0.5px;
    font-size: 19px;
}

input#change_city_input {
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    font-size: 19px;
    color: var(--color);
    letter-spacing: 1px;
    font-weight: 700;
    background-color: transparent;
}
</style>