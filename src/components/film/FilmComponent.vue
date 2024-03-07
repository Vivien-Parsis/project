<script setup>
    import FilmListComponent from './FilmListComponent.vue'
    import { onMounted, ref, watch } from 'vue'
    import { useLoginStore } from '../../store/login.store'
    import { useFilmStore } from '../../store/film.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loginStore = useLoginStore()
    const filmStore = useFilmStore()
    const loadingStore = useLoadingStore()
    const user = loginStore.getUser()
    onMounted(async ()=>{
        console.log("📨 - recupérations des films...")
        FilmList.value = await filmStore.getFilm(user.email,user.password)
    })
    let FilmList = ref()
    watch(FilmList, ()=>{
        console.log("📩 - films reçus")
        loadingStore.setLoading(false)
    })
    
</script>
<template>
    <FilmListComponent v-if="FilmList" :ListFilm="FilmList"/>
</template>
<style scoped>
</style>