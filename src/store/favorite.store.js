import { defineStore } from "pinia"
import { ref } from "vue"

export const useFavoriteStore = defineStore('favorite',()=>{
    const filmFavorite = window.localStorage.getItem("filmfavorite")==null ? ref({}) : ref(JSON.parse(window.localStorage.getItem("filmfavorite")))
    const serieFavorite = window.localStorage.getItem("seriefavorite")==null ? ref({}) : ref(JSON.parse(window.localStorage.getItem("seriefavorite")))
    
    function switchFavoriteFilm (currentId) {
        filmFavorite.value[currentId] = filmFavorite.value[currentId] == "true" ? "false" : filmFavorite.value[currentId] == "false" ? "true" : "true";
        window.localStorage.setItem("filmfavorite", JSON.stringify(filmFavorite.value))
    }
    function switchFavoriteSerie (currentId) {
        serieFavorite.value[currentId] = serieFavorite.value[currentId] == "true" ? "false" : serieFavorite.value[currentId] == "false" ? "true" : "true";
        window.localStorage.setItem("seriefavorite", JSON.stringify(serieFavorite.value))
    }
    return { filmFavorite, serieFavorite, switchFavoriteFilm, switchFavoriteSerie}
})