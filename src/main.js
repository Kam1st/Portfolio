import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import AosVue from "aos-vue";
import VueSocialSharing from 'vue-social-sharing'


createApp(App).use(router).use(AosVue).use(VueSocialSharing).mount('#app')
