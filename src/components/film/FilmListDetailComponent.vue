<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { storeToRefs } from 'pinia'
    import fav from '../../assets/img/fav.svg?url'
    import unfav from '../../assets/img/unfav.svg?url'
    import { black, orange } from '../../const/style'
    const favoriteStore = useFavoriteStore()
    const { switchFavoriteFilm, filmFavorite} = storeToRefs(favoriteStore)
    const {film} = defineProps({
        film:Object
    })
</script>
<template>
    <h3 v-text="film.nom"></h3>
    <iframe v-bind:src="film.video"></iframe>
    <p v-text="film.synospis"></p>
    <router-link v-bind:to="'/film/watch/'+film.id">Regarder</router-link>
    <button class="favButton" @click="favoriteStore.switchFavoriteFilm(film.id)">
        <img :src="filmFavorite[film.id]=='true' ? fav : unfav"> 
    </button>
</template>
<style scoped>
    @media screen and (max-width: 600px) {
        iframe{
            width: 98%;
        }
    }
    @media screen and (min-width: 600px) {
        iframe{
            width: 90%;
        }
    }
    h3{
        padding-top: 1em;
    }
    h3, p{
        margin:0
    }
    *:not(section){
        margin:0 0 1em
    }
    p{
        text-align: center;
        width: 90%;
    }
    a{
        text-decoration: none;
        color:v-bind(black);
    }
    a:hover{
        color:v-bind(orange);
    }
    iframe{
        aspect-ratio:16/9;
    }
    .favButton{
        background-color: rgba(0,0,0,0);
        border:none;
    }
    .favButton img{
        width: 2em;
    }
</style>