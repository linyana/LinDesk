
<template>
    <div id="App" :class="classes.theme">
        <div id="LeftNav">
            <LeftNav />
        </div>
        <div id="Pages">
            <Search />
        </div>
        <div id="RightNav">
            <RightNav />
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from "vue";
import Search from "./pages/Search.vue";
import LeftNav from "./components/LeftNav.vue";
import RightNav from "./components/RightNav.vue";

export default defineComponent({
    components: {
        Search,
        LeftNav,
        RightNav,
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
            ChangeTheme,
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
    left: 20px;
    top: 0;
}

#RightNav {
    position: absolute;
    right: 20px;
    top: 0;
    width: 80px;
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