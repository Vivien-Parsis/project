<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import fav from '../../assets/img/fav.svg?url'
    import unfav from '../../assets/img/unfav.svg?url'
    import { black, orange } from '../../const/style'
    const favoriteStore = useFavoriteStore()
    const {serie} = defineProps({
        serie:Object
    })
</script>
<template>
    <h3 v-text="serie.nom"></h3>
    <img :src="'../../src/assets/img/serie/serie_cover_'+serie.id+'.png'">
    <p v-text="serie.synospis"></p>
    <router-link v-bind:to="'/serie/watch/'+serie.id">Regarder</router-link>
    <button class="favButton" @click="favoriteStore.switchFavoriteSerie(serie.id)">
        <img :src="favoriteStore.getSerieFavorite()[serie.id]=='true' ? fav : unfav"> 
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
    img{
        width:80%;
        aspect-ratio: 16/9;
    }
    .favButton{
        background-color: rgba(0,0,0,0);
        border:none;
    }
    .favButton img{
        width: 2em;
    }
</style>