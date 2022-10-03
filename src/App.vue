
<template>
    <div id="App" :class="classes.theme">
        <div id="LeftNav">
            <LeftNav />
        </div>
        <div id="Pages">
            <router-view v-slot="{ Component,  }">
                <transition name="page" mode="out-in">
                    <keep-alive>
                        <component :is="Component"></component>
                    </keep-alive>
                </transition>
            </router-view>
        </div>
        <div id="RightNav">
            <RightNav />
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent, watch } from "vue";
import Search from "./pages/Search.vue";
import LeftNav from "./components/LeftNav.vue";
import RightNav from "./components/RightNav.vue";
import Weather from "./pages/Weather.vue";
import { themeStore } from "./store/theme";

export default defineComponent({
    components: {
        Search,
        LeftNav,
        RightNav,
        Weather,
    },
    setup() {
        // 主题切换
        interface Theme {
            defaultColor: string;
            color: string;
            backgroundColor: string;
            floatBackgroundColor: string;
            floatBackgroundColorHover: string;
        }

        // 暗色主题
        class Dark implements Theme {
            public defaultColor = "rgba(255,255,255,0.8)";
            public color = "white";
            public backgroundColor = "black";
            public floatBackgroundColor = "rgba(0,0,0,0.5)";
            public floatBackgroundColorHover = "rgba(0,0,0,0.7)";
        }

        // 亮色主题
        class Light implements Theme {
            public defaultColor = "rgba(255,255,255,0.8)";
            public color = "#747474";
            public backgroundColor = "white";
            public floatBackgroundColor = "rgba(255,255,255,0.5)";
            public floatBackgroundColorHover = "rgba(255,255,255,0.7)";
        }

        // 实例化对象
        const dark = new Dark();
        const light = new Light();

        // 创建theme来接收当前主题并应用
        let theme = ref(light);

        const themestore = new themeStore();

        watch(
            () => themestore.theme,
            (newValue) => {
                if (newValue === "dark") {
                    theme.value = dark;
                } else {
                    theme.value = light;
                }
            }
        );

        if (themestore.theme === "dark") {
            theme = ref(dark);
        } else {
            theme = ref(light);
        }

        return {
            theme,
        };
    },
});
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

#LeftNav {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
}

#RightNav {
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
}

.page-enter-from {
    opacity: 0;
    transform: translateY(100px);
}

.page-leave-to {
    opacity: 0;
    transform: translateY(100px);
}

.page-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.page-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.page-enter-active {
    transition: all 0.6s ease;
}
.page-leave-active {
    transition: all 0.6s ease;
}
</style>

<style module="classes">
.theme {
    --background-color: v-bind("theme.backgroundColor");
    --color: v-bind("theme.color");
    --default-color: v-bind("theme.defaultColor");
    --float-backgroundColor: v-bind("theme.floatBackgroundColor");
    --float-backgroundColor-hover: v-bind("theme.floatBackgroundColorHover");
}
</style>