<script setup>
    import { onMounted, ref, watch } from 'vue'  
    import { useRoute } from "vue-router"
    import { useSerieStore } from '../../store/serie.store'
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    const serieStore = useSerieStore()
    const route = useRoute()
    const user = loginStore.getUser()
    onMounted(async ()=>{
        console.log("📨 - recupérations de la série...")
        currentSerie.value = await serieStore.searchSerie(user.email,user.password, route.params.id)
    })
    let currentSerie = ref()
    watch(currentSerie, ()=>{
        console.log("📩 - serie reçu")
        document.title = `MediaStream plus - ${currentSerie.value.nom}`
        loadingStore.setLoading(false)
    })
</script>
<template>
    <section v-if="currentSerie">
        <h4 v-text="currentSerie.nom ? currentSerie.nom : ''"></h4>
        <iframe v-bind:src="currentSerie.video ? currentSerie.video : ''"></iframe>
        <p v-text="currentSerie.synospis ? currentSerie.synospis : ''"></p>
    </section>
</template>
<style scoped>
    section{
        background-color: rgb(206, 206, 206);
        border-radius: 1em;
        margin:2%;
        width:80%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    section h4{
        width: 100%;
    }
    section p{
        width: 80%;
        text-align: center;
    }
    section h4{
        text-align: center;
    }
    section iframe{
        width: 90%;
        aspect-ratio:16/9;
    }

</style>