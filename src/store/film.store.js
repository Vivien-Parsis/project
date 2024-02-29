import { defineStore } from "pinia"
import { filmService } from "../services"

export const useFilmStore = defineStore('film',()=>{
    async function getFilm (email, password) {
        try{
            return await filmService.getFilm(email, password)
        }
        catch(err){
            console.log(err)
        }
    }
    return { getFilm }
})