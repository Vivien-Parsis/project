<script setup>
    import signInFormComponent from '../components/login/SignInFormComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import HeaderComponent from '../components/HeaderComponent.vue'
</script>
<template>
    <HeaderComponent>Login</HeaderComponent>
    <NavComponent/>
    <h2>Se connecter</h2>
    <signInFormComponent/>
    <router-link to="/signup">Se créer un compte</router-link>
</template>