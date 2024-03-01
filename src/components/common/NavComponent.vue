<template>
    <nav>
        <router-link v-if="route.meta.authReq" to="/">home</router-link>
        <router-link v-if="route.meta.authReq" to="/serie">serie</router-link>
        <router-link v-if="route.meta.authReq" to="/film">film</router-link>
        <router-link v-if="route.meta.authReq" to="/favori">favori</router-link>
        <router-link v-if="route.meta.authReq" to="/account">mon compte</router-link>
        <router-link v-if="!route.meta.authReq" to="/signin">Se connecter</router-link>
        <router-link v-if="!route.meta.authReq" to="/signup">Créer un compte</router-link>
        <router-link to="/contact">contact</router-link>
    </nav>
   
</template>
<script setup>
    import { useRoute } from "vue-router"
    const route = useRoute()
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
        color: red;
    }
</style>