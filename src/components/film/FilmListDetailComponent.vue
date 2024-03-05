<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { storeToRefs } from 'pinia'
    import fav from '../../assets/img/fav.svg?url'
    import unfav from '../../assets/img/unfav.svg?url'
    import { lighter_blue, black, orange } from '../../const/color'
    const favoriteStore = useFavoriteStore()
    const { switchFavoriteFilm, filmFavorite} = storeToRefs(favoriteStore)
    const {ListFilm} = defineProps({
        ListFilm:Array
    })
</script>
<template>
    <section v-for="film in ListFilm">
        <h3 v-text="film.nom"></h3>
        <iframe v-bind:src="film.video"></iframe>
        <p v-text="film.synospis"></p>
        <router-link v-bind:to="'/film/watch/'+film.id">Regarder</router-link>
        <button class="favButton" @click="favoriteStore.switchFavoriteFilm(film.id)">
            <img :src="filmFavorite[film.id]=='true' ? fav : unfav"> 
        </button>
    </section>
</template>
<style scoped>
    @media screen and (max-width: 600px) {
        section{
            width:99%;
        }
        iframe{
            width: 98%;
        }
    }
    @media screen and (min-width: 600px) {
        section{
            width:48%;
        }
        iframe{
            width: 90%;
        }
    }
    section{
        background-color: v-bind(lighter_blue);
        border-radius: 1em;
        margin:1% .5% 1%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    section h3{
        padding-top: 1em;
    }
    section h3, section p{
        margin:0
    }
    section *:not(section){
        margin:0 0 1em
    }
    section p{
        text-align: center;
        width: 90%;
    }
    section a{
        text-decoration: none;
        color:v-bind(black);
    }
    section a:hover{
        color:v-bind(orange);
    }
    section iframe{
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