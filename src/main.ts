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
    clientId: '979661372742-rdc8gemqjboan7ps7ud8lgtslsovtje0.apps.googleusercontent.com'
  })

app.mount('#app')
