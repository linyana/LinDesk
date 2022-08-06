
<template>
    <div id="App"></div>
    <div id="Pages" :class="classes.theme">
        <Search />
    </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import Search from "./pages/Search.vue";

export default {
    components: {
        Search,
    },
    setup() {
        // 主题切换
        interface Theme {
            color: string;
            backgroundColor: string;
            floatBackgroundColor: string;
        }

        // 暗色主题
        class Dark implements Theme {
            public color = "rbg(0,0,0,0.8)";
            public backgroundColor = "black";
            public floatBackgroundColor = "black";
        }

        // 亮色主题
        class Light implements Theme {
            public color = "rbg(0,0,0,0.3)";
            public backgroundColor = "green";
            public floatBackgroundColor = "rgba(255,255,255,0.5)";
        }

        // 实例化对象
        const dark = new Dark();
        const light = new Light();

        // 创建theme来接收当前主题并应用
        let theme: any;
        if (localStorage.getItem("theme") === "dark") {
            theme = ref(dark);
        } else {
            theme = ref(light);
        }

        // 切换主题
        function ChangeTheme() {
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme", "dark");
                theme.value = dark;
            } else {
                localStorage.setItem("theme", "light");
                theme.value = light;
            }
        }
        return {
            theme,
            ChangeTheme
        }
    },
};
</script>


<style>
#App {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://s3.bmp.ovh/imgs/2022/03/87bbaff8e7637ddb.jpg);
    background-size: 100% 100%;
}

#Pages {
    position: absolute;
    top: 5%;
    left: 100px;
    width: calc(100% - 200px);
    height: 90%;
}
</style>

<style module="classes">
.theme {
    --background-color: v-bind("theme.backgroundColor");
    --color: v-bind("theme.color");
    --float-backgroundColor: v-bind("theme.floatBackgroundColor");
}
</style>