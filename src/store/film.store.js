import { defineStore } from "pinia"
import { filmService } from "../services/film.services"

export const useFilmStore = defineStore('film',()=>{
    async function getFilm (email, password) {
        try{
            return await filmService.getFilm(email, password)
        }
        catch(err){
            console.log(err)
        }
    }
    async function searchFilm (email, password, id) {
        try{
            return await filmService.searchFilm(email, password, id)
        }
        catch(err){
            console.log(err)
        }
    }
    return { getFilm, searchFilm }
})