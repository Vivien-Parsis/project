<script setup>
    import { router } from '../../router';
    import { useLoginStore } from '../../store/login.store'
    const loginStore = useLoginStore()
    import { toRaw } from 'vue'
    import { storeToRefs } from 'pinia'
    const { signIn , user } = storeToRefs(loginStore) 
    const formSignIn = async (event) => {
        event.preventDefault()
        await loginStore.signIn(event.target.email.value, event.target.password.value)
        if(toRaw(user.value.email)!=undefined && toRaw(user.value.password)!=undefined){
            router.push({path:"/"})
        }
    } 
</script>
<template>
    <form @submit="formSignIn">
        <input name="email" type="email" placeholder="inserer email..." required>
        <input name="password" type="password" placeholder="inserer mot de passe..." required>
        <input type="submit" value="se connecter">
    </form>
</template>
<style scoped>
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        align-content: center;
    }
</style>