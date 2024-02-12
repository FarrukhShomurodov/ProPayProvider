import './assets/style/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// test 
import test from './views/Dashboard.vue'
import router from './router'

const app = createApp(test)

app.use(router)

app.mount('#app')
