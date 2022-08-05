<template>
    <div id="App" :class="classes.light">
        <button @click="ChangeTheme">切换主题</button>
    </div>
</template>

<script lang="ts">
// export default {
//     setup() {
//         interface Dark {
//             light: string;
//             backgroundColor: string;
//         }

//         const dark: Dark = {
//             light: "green",
//             backgroundColor: "black",
//         };

//         interface Light extends Dark {}

//         const light: Light = {
//             light: "green",
//             backgroundColor: "black",
//         };

//         return {
//             dark,
//         };
//     },
// };

export default {
    setup() {
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

        const theme = dark;

        // ChangeTheme
        function ChangeTheme(){
            if(localStorage.getItem('theme') === 'light'){
                localStorage.setItem('theme','dark');
            }
        }

        return {
            dark,
            light,
            theme
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
.dark {
    background-color: v-bind("dark.backgroundColor");
}

.light {
    background-color: v-bind("light.backgroundColor");
}
</style>