<script setup>
    import { onMounted, ref, watch } from 'vue'
    import { useFilmStore } from '../../store/film.store'
    import { useSerieStore } from '../../store/serie.store'
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    import favoriteSection from './favoriteSectionComponent.vue'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    const filmStore = useFilmStore()
    const serieStore = useSerieStore()
    const user = loginStore.getUser()
    onMounted(async ()=>{
        console.log("📨 - recupération des media...")
        mediaList.value.film = await filmStore.getFilm(user.email,user.password)
        mediaList.value.serie = await serieStore.getSerie(user.email,user.password)
    })
    let mediaList = ref({
        film:{},
        serie:{}
    })
    watch(mediaList.value, ()=>{
        console.log("📩 - media réçus")
        loadingStore.setLoading(false)
    })
</script>
<template>
    <section v-if="mediaList.film">
        <favoriteSection title="Mes films favoris" :mediaList="mediaList.film" type="film"/>
    </section>
    <section v-if="mediaList.serie">
        <favoriteSection title="Mes séries favorites" :mediaList="mediaList.serie" type="serie"/>
    </section>
</template>
<style scoped>
    a{
        color: black;
        text-decoration: none;
    }
    a:hover{
        color:aquamarine;
    }
</style>