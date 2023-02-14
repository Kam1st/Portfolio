import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import AOS from 'aos-vue'

createApp(App).use(router).use(AOS).mount('#app')
