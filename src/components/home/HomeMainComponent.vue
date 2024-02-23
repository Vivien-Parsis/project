<script setup>
    import { ref } from 'vue';
    import HomeSectionComponent from './HomeSectionComponent.vue'
    const listeFilmNouveaute = ref([
        {
            name:"Avatar 2",
            link:"/film/watch/2"
        },{
            name:"The batman",
            link:"/film/watch/8"
        }
    ])
    const filmPopulaire = ref([
        {
            name:"Avenger",
            link:"/film/watch/4"
        },{
            name:"Top Gun",
            link:"/film/watch/5"
        }
    ])
</script>

<template>
    <HomeSectionComponent title="Nouveauté film" v-bind:listlink="listeFilmNouveaute"/>
    <HomeSectionComponent title="Film populaire" v-bind:listlink="filmPopulaire"/>
</template>

<style scoped>
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }
    div p{
        width: 98%;
        text-align: justify;
    }
</style>