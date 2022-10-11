import 'uno.css'
import 'svg.store'
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { routes } from './config/routes'
import { history } from './shared/history'
import { App } from './App'
import './styles/main.styl'

const router = createRouter({ history, routes })

createApp(App).use(router).mount('#app')
