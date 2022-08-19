<template>
    <div id="weather">
        <div class="city_card">
            <div class="now_city">当前城市 : {{city}}</div>
            <div class="input"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cityStore } from "../store/city";

const store = cityStore();

let city = ref(store.city);
if (["", " ", null].includes(city.value)) {
    city.value = store.city = "成都";
}
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
}

.now_city {
    width: 170px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: 700;
    color: var(--color);
    letter-spacing: 0.5px;
    font-size: 20px;
}
</style>