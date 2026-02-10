import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- Importamos el router que creamos arriba
import './assets/main.css'

const app = createApp(App)

app.use(router) // <--- Le decimos a Vue que use el router
app.mount('#app')