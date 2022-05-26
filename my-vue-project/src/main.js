import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes_index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(routes).mount('#app')