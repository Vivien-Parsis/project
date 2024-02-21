import {  createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Contact from '../pages/contact.vue'
import Serie from '../pages/serie.vue'
import Film from '../pages/film.vue'
import FilmWatch from '../pages/filmWatch.vue'
import Login from '../pages/login.vue'
import { useLoginStore } from '../store/login.store'

const routes = [
    {
        path : "/", component : Home, meta:{authReq:false}
    },
    {
        path : "/serie", component : Serie, meta:{authReq:true}
    },
    {
        path : "/film", component : Film, meta:{authReq:true}
    },
    {
        path : "/contact", component : Contact, meta:{authReq:false}
    },
    {
        path : "/film/watch/:id", component : FilmWatch, params:true, meta:{authReq:true}
    },
    {
        path : "/login", component : Login, meta:{authReq:false}
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
router.beforeEach((to, from)=>{
    const loginStore = useLoginStore()
    console.log(loginStore.getUser)
    if(to.path!=="/login" && to.meta.authReq && !loginStore.user.email && !loginStore.user.password ){
        return "/login"
    }
})

  