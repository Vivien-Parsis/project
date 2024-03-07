<script setup>
    import searchComponent from "../common/SearchComponent.vue"
    import { ref } from "vue"
    import { lighter_blue } from '../../const/style'
    import serieListDetailComponent from "./SerieListDetailComponent.vue"
    const props = defineProps({
        ListSerie:Array
    })
    const filteredList = ref(props.ListSerie)
    const filter = (value) => {
        filteredList.value = []
        for(let serie of props.ListSerie){
            if(serie.nom.toLowerCase().includes(value.trim().toLowerCase())){
                filteredList.value.push(serie)
            }
        }
    }
</script>
<template>
    <searchComponent @searchInput="filter" placeholder="Recherche serie ici..."/>
    <div class="serieList">
        <section v-for="serie in filteredList">
            <serieListDetailComponent :serie="serie"/>
        </section>
    </div>
</template>
<style scoped>
    @media screen and (max-width:600px){
        section{
            width:98%;
        }
    }
    @media screen and (min-width:600px){
        section{
            width:48%;
        }
    }
    .serieList{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        align-content: center;
        justify-content: space-evenly;
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
</style>