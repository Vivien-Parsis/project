import './style.css'
import { createApp } from 'vue'
 import App from './App.vue'
import {  createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
import Contact from './pages/contact.vue'
import Serie from './pages/serie.vue'
import Film from './pages/film.vue'

const routes = [
    {
        path : "/", component : Home
    },
    {
        path : "/serie", component : Serie
    },
    {
        path : "/film", component : Film
    },
    {
        path : "/contact", component : Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

const app = createApp( App )

app.use(router)

app.mount('#app')