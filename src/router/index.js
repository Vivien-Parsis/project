import {  createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Contact from '../pages/contact.vue'
import Film from '../pages/film.vue'
import Serie from '../pages/serie.vue'
import FilmWatch from '../pages/filmWatch.vue'
import SerieWatch from '../pages/serieWatch.vue'
import SignIn from '../pages/signIn.vue'
import SignUp from '../pages/signUp.vue'
import Account from '../pages/account.vue'
import Favorite from '../pages/favorite.vue'
import Error404 from '../pages/404error.vue'
import { useLoginStore } from '../store/login.store'
import { useLoadingStore } from '../store/loading.store'

const routes = [
    {
        path : "/", component : Home, meta:{authReq:true}
    },{
        path : "/serie", component : Serie, meta:{authReq:true, title:"Serie"}
    },{
        path : "/film", component : Film, meta:{authReq:true, title:"Film"}
    },{
        path : "/contact", component : Contact, meta:{authReq:false, title:"Contact"}
    },{
        path : "/film/watch/:id", component : FilmWatch, params:true, meta:{authReq:true}
    },{
        path : "/serie/watch/:id", component : SerieWatch, params:true, meta:{authReq:true}
    },{
        path : "/signin", component : SignIn, meta:{authReq:false, title:"Sign In"}
    },{
        path : "/signup", component : SignUp, meta:{authReq:false, title:"Sign Up"}
    },{
        path : "/favori", component : Favorite, meta:{authReq:true, title:"Favori"}
    },{
        path : "/account", component : Account, meta:{authReq:true, title:"Compte"}
    },{
        path : "/:pathMatch(.*)*", component : Error404, meta:{authReq:false, title:"Error"}
    }
]


export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
router.beforeEach((to, from)=>{
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    const user = loginStore.getUser()
    document.title = to.meta.title ? `MediaStream plus - ${to.meta.title}` : "MediaStream plus"
    loadingStore.setLoading(true)
    if(to.meta.authReq && loginStore.isSign()){
        loginStore.signIn(user.email,user.password)
    }
    if(!to.path.includes("/signin") && to.meta.authReq && !loginStore.isSign()){
        return "/signin"
    }
    if((to.path.includes("/signin") || to.path.includes("/signup")) && loginStore.isSign()){
        return from.path
    }
})