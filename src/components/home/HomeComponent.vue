<script setup>
    import { ref} from 'vue'
    import HomeSectionComponent from './HomeSectionComponent.vue'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
    const ListMainSection = ref([
        {
            title : "Nouveauté film",
            content : [{
                name:"Avatar 2",
                link:"/film/watch/2"
            },{
                name:"The batman",
                link:"/film/watch/8"
            }]
        },{
            title : "Film populaire",
            content : [{
                name:"Avenger",
                link:"/film/watch/4"
            },{
                name:"Top Gun",
                link:"/film/watch/5"
            }]
        },{
            title : "Série populaire",
            content : [{
                name:"Casa de papel",
                link:"/serie/watch/4"
            },{
                name:"Breaking bad",
                link:"/serie/watch/7"
            }]
        },{
            title : "Nouvelle série",
            content : [{
                name:"Loki",
                link:"/serie/watch/1"
            },{
                name:"The Mandalorian",
                link:"/serie/watch/2"
            }]
        }
    ])
</script>

<template>
    <section v-for="MainSection in ListMainSection">
        <HomeSectionComponent :title="MainSection.title" :listlink="MainSection.content"/>
    </section>
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