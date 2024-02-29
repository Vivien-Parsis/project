<script setup>
    import { onMounted, ref, toRaw } from 'vue'
    import { useUserStore } from '../../store/user.store'
    import { useFilmStore } from '../../store/film.store'
    import { useSerieStore } from '../../store/serie.store'
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
    const loginStore = useLoginStore()
    const userStore = useUserStore()
    const filmStore = useFilmStore()
    const serieStore = useSerieStore()
    onMounted(async ()=>{
        FilmList.value = await filmStore.getFilm(loginStore.user.email,loginStore.user.password)
        SerieList.value = await serieStore.getSerie(loginStore.user.email,loginStore.user.password)
    })
    let FilmList = ref()
    let SerieList = ref()
</script>
<template>
    <h2>Mes films favoris</h2>
    <ul v-for="film in FilmList">   
        <li v-if="userStore.filmFavorite[film.id]=='true'">
            <router-link :to="'/film/watch/'+film.id"> {{ film.nom }} </router-link>
        </li>
    </ul>
    <h2>Mes séries favorites</h2>
    <ul v-for="serie in SerieList">
        <li v-if="userStore.serieFavorite[serie.id]=='true'">
            <router-link :to="'/serie/watch/'+serie.id"> {{ serie.nom }} </router-link>
        </li>
    </ul>
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