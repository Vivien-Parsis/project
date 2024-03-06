<template>
    <nav>
        <img :src="navButton" v-if="isMobile" @click="toggleNav()">
        <div v-show="showNav">
            <img :src="navButton" v-if="isMobile" @click="toggleNav()">
            <NavLinkComponent v-for="link in navLinkList" :check="link.check" :cssClass="link.cssClass" :to="link.to" :name="link.name" />
        </div>
    </nav>
</template>
<script setup>
    import { useRouter, useRoute } from "vue-router"
    import { ref } from "vue"
    import { useLoginStore } from "../../store/login.store"
    import NavLinkComponent from "./NavLinkComponent.vue"
    import navButton from "../../assets/img/nav.svg?url"
    import { light_blue, black, orange, red, isMobile } from '../../const/style'
    const loginStore = useLoginStore()
    const router = useRouter()
    const route = useRoute()
    const showNav = ref(isMobile ? false : true)
    const toggleNav = () => {showNav.value = !showNav.value} 
    // const routerListAuthReq = {}
    // for(let currentroute of router.getRoutes()){
    //     routerListAuthReq[currentroute.path] = currentroute.meta.authReq
    // }
    const navLinkList = ref([
        {
            check : loginStore.isSign(),
            cssClass : route.path == '/' ? 'currenttab' : '',
            to : "/",
            name : "home"
        },{
            check : loginStore.isSign(),
            cssClass : route.path.includes('/serie') ? 'currenttab' : '',
            to : "/serie",
            name : "serie"
        },{
            check : loginStore.isSign(),
            cssClass : route.path.includes('/film') ? 'currenttab' : '',
            to : "/film",
            name : "film"
        },{
            check : loginStore.isSign(),
            cssClass : route.path.includes('/favori') ? 'currenttab' : '',
            to : "/favori",
            name : "favori"
        },{
            check : loginStore.isSign(),
            cssClass : route.path.includes('/account') ? 'currenttab' : '',
            to : "/account",
            name : "mon compte"
        },{
            check : !loginStore.isSign(),
            cssClass : route.path.includes('/signin') ? 'currenttab' : '',
            to : "/signin",
            name : "se connecter"
        },{
            check : !loginStore.isSign(),
            cssClass : route.path.includes('/signup') ? 'currenttab' : '',
            to : "/signup",
            name : "créer un compte"
        },{
            check : true,
            cssClass : route.path.includes('/contact') ? 'currenttab' : '',
            to : "/contact",
            name : "contact"
        },
    ])
</script>
<style scoped>
    @media screen and (max-width:600px) {
        nav div{
            top:0;
            flex-direction: column;
            height: 100%;
            position: fixed;
            background: grey;
            z-index: 99;
            font-size: 3em;
            background-color: v-bind(light_blue);
        }
    }
    nav{
        background-color: v-bind(light_blue);
        padding:.4em 0;
        border-bottom: 1px solid v-bind(black);
    }
    nav div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
    }nav div img{
        width: 1em;
        margin-right:calc(100% - 1em)
    }
    nav img{
        width: 3em;
        margin-right: calc(100% - 3em - 1em);
    }
    nav a{
        text-decoration: none;
        color:v-bind(black)
    }
    nav a:hover{
        color: v-bind(orange);
    }
    .currenttab{
        color: v-bind(red);
        text-decoration: underline;
    }
</style>