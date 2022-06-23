import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@icon-park/vue-next/styles/index.css'

const app = createApp(App)
app.use(store).use(router).mount('#app')
