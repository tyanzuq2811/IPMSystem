import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
// import 'animate.css' // Disabled to prevent animation glitches

const app = createApp(App)
app.use(router)
app.mount('#app')
