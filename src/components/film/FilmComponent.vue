<script setup>
    import { onMounted, ref, watch } from 'vue'
    import FilmListDetailComponent from './FilmListDetailComponent.vue'
    import { useLoginStore } from '../../store/login.store'
    import { useFilmStore } from '../../store/film.store'
    const loginStore = useLoginStore()
    const filmStore = useFilmStore()
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(true)
    onMounted(async ()=>{
        console.log("📨 - recupérations des films...")
        FilmList.value = await filmStore.getFilm(loginStore.user.email,loginStore.user.password)
    })
    let FilmList = ref()
    watch(FilmList, ()=>{
        console.log("📩 - films reçus")
        loadingStore.setLoading(false)
    })
    
</script>
<template>
    <FilmListDetailComponent v-bind:ListFilm="FilmList ? FilmList : []"/>
</template>
<style scoped>
</style>