<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { storeToRefs } from 'pinia'
    import fav from '../../assets/img/fav.svg?url'
    import unfav from '../../assets/img/unfav.svg?url'
    const favoriteStore = useFavoriteStore()
    const { switchFavoriteSerie, serieFavorite} = storeToRefs(favoriteStore)
    const {ListSerie} = defineProps({
        ListSerie:Array
    })
</script>
<template>
    <section v-for="serie in ListSerie">
        <h3 v-text="serie.nom"></h3>
        <iframe v-bind:src="serie.video"></iframe>
        <p v-text="serie.synospis"></p>
        <router-link v-bind:to="'/serie/watch/'+serie.id">Regarder</router-link>
        <button class="favButton" @click="favoriteStore.switchFavoriteSerie(serie.id)">
            <img :src="serieFavorite[serie.id]=='true' ? fav : unfav"> 
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
        background-color: rgb(206, 206, 206);
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
        color:black;
    }
    section a:hover{
        color:red
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