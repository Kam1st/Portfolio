import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import AosVue from "aos-vue";


createApp(App).use(router).use(AosVue).mount('#app')
