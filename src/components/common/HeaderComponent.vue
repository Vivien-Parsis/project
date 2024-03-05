<script setup>
    import logo from "../../assets/img/logo.svg?url"
    import { sky_blue } from "../../const/color"
    import { useLoginStore } from "../../store/login.store"
    const loginStore = useLoginStore()
</script>
<template>
    <header>
        <router-link v-if="loginStore.isSign()" to="/">
            <img :src="logo">
        </router-link>
        <h1>
            <slot>Title</slot>
        </h1>
    </header>
</template>

<style scoped>
    @media screen and (max-width: 600px) {
        header a img{
            display: none;
        }
        header h1{
            font-size: 1.5em;
        }
    }
    @media screen and (min-width: 600px) {
        header h1{
            font-size: 2em;
            white-space:nowrap;
        }
    }   
    header{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: v-bind(sky_blue);
    }
    header h1{
        text-align: center;
        margin-right: calc(50% + 1.5em + 1em);
        margin-left: 50%;
    }
    header a, header a img{
        width: 3em;
    }
    header a{
        left: 1em;
        position: sticky;
    }
</style>