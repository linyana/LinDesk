import { RouteRecordRaw } from "vue-router";
import Search from '../pages/Search.vue';
import Weather from '../pages/Weather.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Search,
    },
    {
        path: '/Search',
        component: Search,
    },
    {
        path: '/Weather',
        component: Weather,
    }
]


export default routes;