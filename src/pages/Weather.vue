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
        <div class="weather_cards">
            <div class="hover_weather_cards">
                <div class="weather_card" v-for="list in weather.list" :key="list.data">
                    <div class="weather_card_img">
                        <img :src="GetWeatherImg(list.wea_day)" alt="list.type" />
                    </div>
                    <div class="weather_card_text">
                        <div class="weather_date">{{month+1}}月{{list.day}}</div>
                        <div class="weather_line">{{list.wea_day}}</div>
                        <div class="weather_line weather_high">最高温度:{{list.tem1}}</div>
                        <div class="weather_line weather_low">最低温度:{{list.tem2}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, reactive } from "vue";
import { cityStore } from "../store/city";
import axios from "axios";

// pinia 记录城市
// store.city:城市
const store = cityStore();

let city = ref(store.city);

// 输入框
// isWrite: 判断应该显示输入框还是提示框
let cityInput = ref(store.city);
let isWrite = ref(false);

let isWriteStyle = ref(`width: ${120 + 20 * city.value.length}px;`);

const ShowInput = () => {
    isWrite.value = true;
    isWriteStyle.value = "width: 600px;";
    getFocus();
};

const EnterCityInput = () => {
    isWrite.value = false;
    store.city = cityInput.value;
    city.value = store.city;
    isWriteStyle.value = `width: ${120 + 20 * city.value.length}px;`;
    ChangeWeatherCity();
};

// 获取input焦点

const refInput = ref();

const getFocus = async () => {
    nextTick(() => {
        refInput.value.focus();
    });
};

interface Weather {
    [propName: string]: any;
}

// 监视store.city来获取天气
const weather: Weather = reactive({
    list: [],
});


async function GetWeather() {
    await axios
        .get(
            "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=41683822&appsecret=A7hMMWSV"
        )
        .then((response) => {
            weather.list = response.data.data;
            store.city = response.data.city;
            city.value = store.city;
        });
}

async function ChangeWeatherCity() {
    await axios
        .get(
            "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=41683822&appsecret=A7hMMWSV&city=" + store.city
        )
        .then((response) => {
            weather.list = response.data.data;
            store.city = response.data.city;
            city.value = store.city;
        });
}

GetWeather();

const GetWeatherImg = (src: string) => {
    return new URL(`../assets/images/weather/${src}.png`, import.meta.url).href;
};

// 获取月份
const month: number = new Date().getMonth();
</script>

<style scoped>
#weather {
    position: relative;
    width: 100%;
    height: 100%;
}

.city_card {
    cursor: pointer;
    margin: auto;
    background-color: var(--float-backgroundColor);
    backdrop-filter: blur(20px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 15px;
    transition: all 0.8s;
    margin-top: 50px;
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
    line-height: 32px;
}

.weather_cards {
    justify-content: space-between;
    width: 1300px;
    margin: 50px auto;
    margin-top: 140px;
    overflow: hidden;
}

.hover_weather_cards {
    display: flex;
    justify-content: space-between;
    width: 2300px;
}

.weather_card {
    width: 250px;
    height: 380px;
    background-color: #fff;
    background-color: var(--float-backgroundColor);
    backdrop-filter: blur(20px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 15px;
    transition: all 0.8s;
}

.weather_card_img {
    width: 100%;
    text-align: center;
    height: 40%;
}

.weather_card_img img {
    margin-top: 30px;
    width: 50%;
    transition: all 0.8s;
    cursor: pointer;
}

.weather_card_img img:hover {
    transform: scale(1.2);
}

.weather_card_text {
    margin-top: 10px;
    text-align: center;
    color: var(--color);
}

.weather_card_text {
    height: 60%;
    line-height: 70px;
    font-size: 26px;
}

.weather_line {
    line-height: 40px;
    font-size: 20px;
}

.weather_high {
    color: rgb(223, 66, 66);
}

.weather_low {
    color: rgb(107, 107, 192);
}
</style>