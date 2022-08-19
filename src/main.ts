import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia().use(piniaPersist);

createApp(App).use(pinia).use(ElementPlus).mount('#app')
