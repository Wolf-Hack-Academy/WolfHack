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
    clientId: '1075446635926-o26l315ardnls1lvo0jmf8jl2qrc7sp0.apps.googleusercontent.com'
  })

app.mount('#app')
