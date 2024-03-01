<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { storeToRefs } from 'pinia'
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