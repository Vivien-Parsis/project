<script setup>
    import signInFormComponent from '../components/login/SignInFormComponent.vue'
    import NavComponent from '../components/common/NavComponent.vue'
    import HeaderComponent from '../components/common/HeaderComponent.vue'
    import FooterComponent from '../components/common/FooterComponent.vue'
    import { black } from '../const/style'
</script>
<template>
    <HeaderComponent>Connexion</HeaderComponent>
    <NavComponent/>
    <h2>Se connecter</h2>
    <signInFormComponent/>
    <router-link to="/signup" class="SignLink">Se créer un compte</router-link>
    <FooterComponent/>
</template>
<style scoped>
    h2, .SignLink{
        display: block;
        width:100%;
        text-align: center;
    }
    .SignLink{
        color:v-bind(black);
        text-decoration: none;
    }
    .SignLink:hover{
        color:aquamarine;
    }
</style>