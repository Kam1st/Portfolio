import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import AOS from 'aos-vue'
const Vue3Mq = require('vue3-mq');

createApp(App).use(router).use(AOS).component('MqResponsive', Vue3Mq.MqResponsive).mount('#app')
Vue3Mq.updateBreakpoints({
    preset: "bootstrap5"
})
