import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('aframe')


createApp(App).use(router).mount('#app')