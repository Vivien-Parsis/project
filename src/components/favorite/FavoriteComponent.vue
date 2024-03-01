<script setup>
    import { onMounted, ref } from 'vue'
    import { useFavoriteStore } from '../../store/favorite.store'
    import { useFilmStore } from '../../store/film.store'
    import { useSerieStore } from '../../store/serie.store'
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    import favoriteSection from './favoriteSectionComponent.vue'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    const favoriteStore = useFavoriteStore()
    const filmStore = useFilmStore()
    const serieStore = useSerieStore()
    const user = loginStore.getUser()
    loadingStore.setLoading(false)
    onMounted(async ()=>{
        FilmList.value = await filmStore.getFilm(user.email,user.password)
        SerieList.value = await serieStore.getSerie(user.email,user.password)
    })
    let FilmList = ref()
    let SerieList = ref()
</script>
<template>
    <section v-if="FilmList">
        <favoriteSection title="Mes films favoris" :info="FilmList" type="film"/>
    </section>
    <section v-if="SerieList">
        <favoriteSection title="Mes séries favorites" :info="SerieList" type="serie"/>
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