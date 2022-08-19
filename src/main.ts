import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as VueRouter from "vue-router";
import routes from "./route/index";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const pinia = createPinia().use(piniaPersist);

createApp(App).use(pinia).use(ElementPlus).use(router).mount('#app');
