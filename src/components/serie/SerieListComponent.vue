<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import searchComponent from "../common/searchComponent.vue"
    import { ref } from "vue"
    import { lighter_blue, black, orange } from '../../const/style'
    import serieListDetailComponent from "./SerieListDetailComponent.vue"
    const {ListSerie} = defineProps({
        ListSerie:Array
    })
    const search = ref("")
    const getSearch = (value) => {
        search.value = value
        console.log("filtering...")
    }
    const filter = (nom) => {
        return nom.toLowerCase().includes(search.value.trim())
    }
</script>
<template>
    <searchComponent @searchInput="getSearch"/>
    <div class="serieList">
        <section v-for="serie in ListSerie">
            <serieListDetailComponent :serie="serie" v-if="filter(serie.nom)"/>
        </section>
    </div>
</template>
<style scoped>
    @media screen and (max-width:600px){
        .serieList{
            grid-template-columns: 100%;
        }
    }
    @media screen and (min-width:600px){
        .serieList{
            grid-template-columns: 50% 50%;
        }
    }
    .serieList{
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