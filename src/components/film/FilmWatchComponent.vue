<script setup>
    import { onMounted, ref, watch } from 'vue'  
    import { useRoute } from "vue-router"
    import { useFilmStore } from '../../store/film.store'
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    const route = useRoute()
    const filmStore = useFilmStore()
    const user = loginStore.getUser()
    onMounted(async ()=>{
        console.log("📨 - recupérations du film...")
        currentFilm.value = await filmStore.searchFilm(user.email,user.password, route.params.id)
    })
    const currentFilm = ref()
    watch(currentFilm, ()=>{
        console.log("📩 - film reçu")
        document.title = `MediaStream plus - ${currentFilm.value.nom}`
        loadingStore.setLoading(false)
    })

</script>
<template>
    <section v-if="currentFilm">
        <h4 v-text="currentFilm.nom ? currentFilm.nom : ''"></h4>
        <iframe v-bind:src="currentFilm.video ? currentFilm.video : ''"></iframe>
        <p v-text="currentFilm.synospis ? currentFilm.synospis : ''"></p>
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