<template>
    <nav>
        <NavLinkComponent v-for="link in navLinkList" :check="link.check" :cssClass="link.cssClass" :to="link.to" :name="link.name" />
    </nav>
</template>
<script setup>
    import { useRouter, useRoute } from "vue-router"
    import { ref } from "vue"
    import NavLinkComponent from "./NavLinkComponent.vue"
    const router = useRouter()
    const route = useRoute()
    const routerListAuthReq = {}
    for(let currentroute of router.getRoutes()){
        routerListAuthReq[currentroute.path] = currentroute.meta.authReq
    }
    const navLinkList = ref([
        {
            check : routerListAuthReq['/'],
            cssClass : route.path == '/' ? 'currenttab' : '',
            to : "/",
            name : "home"
        },{
            check : routerListAuthReq['/serie'],
            cssClass : route.path.includes('/serie') ? 'currenttab' : '',
            to : "/serie",
            name : "serie"
        },{
            check : routerListAuthReq['/film'],
            cssClass : route.path.includes('/film') ? 'currenttab' : '',
            to : "/film",
            name : "film"
        },{
            check : routerListAuthReq['/favori'],
            cssClass : route.path.includes('/favori') ? 'currenttab' : '',
            to : "/favori",
            name : "favori"
        },{
            check : routerListAuthReq['/account'],
            cssClass : route.path.includes('/account') ? 'currenttab' : '',
            to : "/account",
            name : "mon compte"
        },{
            check : routerListAuthReq['/signin'],
            cssClass : route.path.includes('/signin') ? 'currenttab' : '',
            to : "/signin",
            name : "se connecter"
        },{
            check : routerListAuthReq['/signup'],
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
        background-color: rgb(210, 210, 210);
        border-bottom: 1px solid black;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
    }
    nav a{
        text-decoration: none;
        color: black;
    }
    nav a:hover{
        color: rgb(255, 130, 130);
    }
    .currenttab{
        color: rgb(128, 9, 9);
        text-decoration: underline;
    }
</style>