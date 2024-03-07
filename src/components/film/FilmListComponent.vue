<script setup>
    import searchComponent from "../common/SearchComponent.vue"
    import filmListDetailComponent from "./FilmListDetailComponent.vue"
    import { ref } from "vue"
    import { lighter_blue } from '../../const/style'
    const props = defineProps({
        ListFilm:Array
    })
    const filteredList = ref(props.ListFilm)
    const filter = (value) => {
        filteredList.value = []
        for(let film of props.ListFilm){
            if(serie.nom.toLowerCase().includes(value.trim().toLowerCase())){
                filteredList.value.push(film)
            }
        }
    }
</script>
<template>
    <searchComponent @searchInput="filter" placeholder="Recherche film ici..."/>
    <div class="filmList">
        <section v-for="film in filteredList">
            <filmListDetailComponent :film="film"/>
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
    .filmList{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        align-content: center;
        justify-content: space-evenly;
        margin: 0 0 5%;
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