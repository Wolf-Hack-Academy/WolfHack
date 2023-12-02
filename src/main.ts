import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vue3GoogleLogin, {
    clientId: '136797609752-lr0vq1da0m2n04a41o7nes1dvt63sik8.apps.googleusercontent.com'
  })

app.mount('#app')
