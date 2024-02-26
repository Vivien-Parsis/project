<template>
    <nav>
        <router-link to="/">home</router-link>
        <router-link to="/serie">serie</router-link>
        <router-link to="/film">film</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/favori">favori</router-link>
        <router-link to="/account">mon compte</router-link>
    </nav>
   
</template>
<script setup>

</script>
<style scoped>
    nav{
        width: 100%;
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