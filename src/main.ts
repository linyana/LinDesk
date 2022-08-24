import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as VueRouter from "vue-router";
import routes from "./route/index";
import axios from "./plugins/axios";

// vue-router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// pinia
const pinia = createPinia().use(piniaPersist);

const app = createApp(App);

app.use(pinia).use(ElementPlus).use(router);

app.mount('#app');

app.config.globalProperties.$axios = axios;
