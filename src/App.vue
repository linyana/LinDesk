<template>
    <div id="App" :class="classes.theme">
        <button @click="ChangeTheme">切换主题</button>
        {{theme.backgroundColor}}
    </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";

export default {
    setup() {
        // 主题切换
        interface Theme {
            color: string;
            backgroundColor: string;
        }

        class Dark implements Theme {
            public color = "white";
            public backgroundColor = "black";
        }

        class Light implements Theme {
            public color = "white";
            public backgroundColor = "green";
        }

        const dark = new Dark();
        const light = new Light();

        let theme = ref(dark);

        // 改变主题
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
            dark,
            light,
            theme,
            ChangeTheme,
        };
    },
};
</script>


<style scoped>
#App {
    width: 100%;
    height: 100%;
}
</style>

<style module="classes">
.theme {
    transition: all 0.5s;
    background-color: v-bind("theme.backgroundColor");
    color: v-bind("theme.color");
}

</style>