<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { ref } from 'vue'
    const favoriteStore = useFavoriteStore()
    const { mediaList, title, type } = defineProps({
        mediaList:Object,
        title:String,
        type:String
    })
    const favorite = ref(type == "serie" ? favoriteStore.serieFavorite : type == "film" ? favoriteStore.filmFavorite : [])
</script>
<template>
    <h2>{{ title }}</h2>
    <ul v-for="item in mediaList">   
        <li v-if="favorite[item.id]=='true'">
            <router-link :to="'/'+type+'/watch/'+item.id"> {{ item.nom }} </router-link>
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