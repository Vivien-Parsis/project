<script setup>
    import { onMounted, ref, watch } from 'vue'
    import SerieListComponent from './SerieListComponent.vue'
    import { useSerieStore } from '../../store/serie.store'
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    const serieService = useSerieStore()
    const user = loginStore.getUser()
    onMounted(async ()=>{
        console.log("📨 - recupérations des séries...")
        SerieList.value = await serieService.getSerie(user.email,user.password)
    })
    let SerieList = ref()
    watch(SerieList, ()=>{
        console.log("📩 - series reçus")
        loadingStore.setLoading(false)
    })
    
</script>
<template>
    <SerieListComponent v-if="SerieList" :ListSerie="SerieList"/>
</template>
<style scoped>
</style>