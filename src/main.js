import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import AOS from 'aos-vue'
const Vue3Mq = require('vue3-mq');
import VueParticles from 'vue-particles';

createApp(App).use(router).use(AOS).use(VueParticles).component('MqResponsive', Vue3Mq.MqResponsive).mount('#app')
Vue3Mq.updateBreakpoints({
    preset: "bootstrap5"
})
