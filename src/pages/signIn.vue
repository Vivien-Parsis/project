<script setup>
    import signInFormComponent from '../components/login/SignInFormComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
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
        color:black;
        text-decoration: none;
    }
    .SignLink:hover{
        color:aquamarine;
    }
</style>