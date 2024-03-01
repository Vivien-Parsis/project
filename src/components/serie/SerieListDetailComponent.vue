<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { storeToRefs } from 'pinia'
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
            <img src="../../assets/img/unfav.svg"> 
        </button>
    </section>
</template>
<style scoped>
section{
    background-color: rgb(206, 206, 206);
    border-radius: 1em;
    margin:2%;
    width:40%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
section h3, section p{
    margin:0
}
section *:not(section){
    margin:1em 0
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
    width: 90%;
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