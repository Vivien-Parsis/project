<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { ref } from 'vue'
    const favoriteStore = useFavoriteStore()
    const { info, title, type } = defineProps({
        info:Array,
        title:String,
        type:String
    })
    const favorite = ref(type == "serie" ? favoriteStore.serieFavorite : favoriteStore.filmFavorite)
    console.log(favorite.value)
</script>
<template>
    <h2>{{ title }}</h2>
    <ul v-for="item in info">   
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