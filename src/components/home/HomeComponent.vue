<script setup>
    import { ref} from 'vue'
    import HomeSectionComponent from './HomeSectionComponent.vue'
    import { useLoadingStore } from '../../store/loading.store'
    import newIcon from '../../assets/img/new.svg?url'
    import popIcon from '../../assets/img/star.svg?url'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
    const ListMainSection = ref([
        {
            title : "Nouveauté film",
            img : newIcon,
            content : [{
                name:"Avatar 2",
                link:"/film/watch/2"
            },{
                name:"The batman",
                link:"/film/watch/8"
            }]
        },{
            title : "Film populaire",
            img : popIcon,
            content : [{
                name:"Avenger",
                link:"/film/watch/4"
            },{
                name:"Top Gun",
                link:"/film/watch/5"
            }]
        },{
            title : "Série populaire",
            img : popIcon,
            content : [{
                name:"Casa de papel",
                link:"/serie/watch/4"
            },{
                name:"Breaking bad",
                link:"/serie/watch/7"
            }]
        },{
            title : "Nouvelle série",
            img : newIcon,
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
    <main>
        <h2>MediaStream plus</h2>
        <section v-for="MainSection in ListMainSection">
            <HomeSectionComponent :title="MainSection.title" :listlink="MainSection.content" :imgSrc="MainSection.img"/>
        </section>
    </main>
</template>

<style scoped>
    main{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }
    main p{
        width: 98%;
        text-align: justify;
    }
    section{
        width:99%;
    }
    h2{
        text-transform: uppercase;
    }
</style>