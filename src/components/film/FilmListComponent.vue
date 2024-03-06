<script setup>
    import { ref } from "vue"
    import searchComponent from "../common/searchComponent.vue"
    import { lighter_blue, black, orange } from '../../const/style'
    import filmListDetailComponent from "./FilmListDetailComponent.vue"
    const {ListFilm} = defineProps({
        ListFilm:Array
    })
    const search = ref("")
    const getSearch = (value) => {
        search.value = value
        console.log("filtering...")
    }
    const filter = (nom) => {
        return nom.toLowerCase().includes(search.value.trim().toLowerCase())
    }
</script>
<template>
    <searchComponent @searchInput="getSearch"/>
    <div class="filmList">
        <section v-for="film in ListFilm">
            <filmListDetailComponent :film="film" v-if="filter(film.nom)"/>
        </section>
    </div>
</template>
<style scoped>
    @media screen and (max-width:600px){
        .filmList{
            grid-template-columns: 100%;
        }
    }
    @media screen and (min-width:600px){
        .filmList{
            grid-template-columns: 50% 50%;
        }
    }
    .filmList{
        display: grid;
    }
    section{
        width:99%;
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
</style>