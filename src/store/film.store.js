import { defineStore } from "pinia"
import { filmService } from "../services"

export const useFilmStore = defineStore('film',()=>{
    async function getFilm () {
        try{
            return await filmService.getFilm()
        }
        catch(err){
            console.log(err)
        }
    }
    return { getFilm }
})