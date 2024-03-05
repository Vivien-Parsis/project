<template>
    <nav>
        <NavLinkComponent v-for="link in navLinkList" :check="link.check" :cssClass="link.cssClass" :to="link.to" :name="link.name" />
    </nav>
</template>
<script setup>
    import { useRouter, useRoute } from "vue-router"
    import { ref } from "vue"
    import { useLoginStore } from "../../store/login.store"
    import NavLinkComponent from "./NavLinkComponent.vue"
    import { light_blue, black, orange, red } from '../../const/color'
    const loginStore = useLoginStore()
    const router = useRouter()
    const route = useRoute()
    const routerListAuthReq = {}
    for(let currentroute of router.getRoutes()){
        routerListAuthReq[currentroute.path] = currentroute.meta.authReq
    }
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
    nav{
        width: 100%;
        padding:.4em 0;
        background-color: v-bind(light_blue);
        border-bottom: 1px solid v-bind(black);
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
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