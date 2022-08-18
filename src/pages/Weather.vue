<template>
    <div></div>
</template>

<script setup lang="ts">
import { onMounted,ref } from "vue";

let city: string = ref();

// 获取当前城市
const GetCity = ()=>{
    AMap.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
        });
        geolocation.getCityInfo((status, result) => {
            //只能获取当前用户所在城市和城市的经纬度
            if (status == "complete") {
                city.value = result.city;
                console.log(city.value)
            }
        });
        geolocation.getCurrentPosition((status, result) => {
            //获取用户当前的精确位置
            if (status == "complete") {
                city.value = result.city;
            }
        });
    });
}

GetCity()



</script>

<style scoped>
</style>