import './style.css'
import { createApp } from 'vue'
 import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faHome)

const pinia = createPinia()

const app = createApp( App )
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)

app.mount('#app')