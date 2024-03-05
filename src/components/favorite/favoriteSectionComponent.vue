<script setup>
    import { useFavoriteStore } from '../../store/favorite.store'
    import { ref } from 'vue'
    import { light_blue, lighter_blue, black, orange} from '../../const/color'
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
    <li v-for="item in mediaList" v-show="favorite[item.id]=='true'">
        <router-link :to="'/'+type+'/watch/'+item.id"> {{ item.nom }} </router-link>
    </li>
</template>
<style scoped>
    h2{
        background-color: v-bind(light_blue);
        border-top: 1px solid v-bind(black);
        margin:0;
        padding:0.5em;
    }
    li{
        background-color: v-bind(lighter_blue);
        margin:0;
        padding:0.5em;
        width: 100%;
        list-style:none;
    }
    a{
        color: v-bind(black);
        text-decoration: none;
    }
    a:hover{
        color:v-bind(orange);
    }
</style>