import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Parallax from 'scroll-parallax-effect/vue'

createApp(App).use(store).use(router).use(Parallax).mount('#app')
