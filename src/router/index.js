import {  createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Contact from '../pages/contact.vue'
import Serie from '../pages/serie.vue'
import Film from '../pages/film.vue'
import FilmWatch from '../pages/filmWatch.vue'
import SignIn from '../pages/signIn.vue'
import SignUp from '../pages/signUp.vue'
import Error404 from '../pages/404error.vue'
import { useLoginStore } from '../store/login.store'

const routes = [
    {
        path : "/", component : Home, meta:{authReq:false}
    },{
        path : "/serie", component : Serie, meta:{authReq:true}
    },{
        path : "/film", component : Film, meta:{authReq:true}
    },{
        path : "/contact", component : Contact, meta:{authReq:false}
    },{
        path : "/film/watch/:id", component : FilmWatch, params:true, meta:{authReq:true}
    },{
        path : "/signin", component : SignIn, meta:{authReq:false}
    },{
        path : "/signup", component : SignUp, meta:{authReq:false}
    },{
        path : "/:404*", component : Error404, meta:{authReq:false} 
    }
]


export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
router.beforeEach((to, from)=>{
    const loginStore = useLoginStore()
    if(to.path!=="/signin" && to.meta.authReq && !loginStore.user.email && !loginStore.user.password){
        return "/signin"
    }
})