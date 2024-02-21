<script setup>
    import { useLoginStore } from '../../store/login.store'
    const loginStore = useLoginStore()
    import { storeToRefs } from 'pinia'
    const { signIn } = storeToRefs(loginStore) 
    const formSignIn = async (event) => {
        event.preventDefault()
        await loginStore.signIn(event.target.email.value, event.target.password.value)
    } 
</script>
<template>
    <form @submit="formSignIn">
        <input name="email" type="email" required>
        <input name="password" type="password" required>
        <input type="submit" value="se connecter">
    </form>
</template>
<style>

</style>