<script setup>
    import signUpFormComponent from '../components/login/SignUpFormComponent.vue'
    import NavComponent from '../components/common/NavComponent.vue'
    import HeaderComponent from '../components/common/HeaderComponent.vue'
    import FooterComponent from '../components/common/FooterComponent.vue'
    import { black } from '../const/style'
</script>
<template>
    <HeaderComponent>Connexion</HeaderComponent>
    <NavComponent/>
    <h2>Créer un compte</h2>
    <signUpFormComponent/>
    <router-link to="/signIn" class="SignLink">Se connecter</router-link>
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