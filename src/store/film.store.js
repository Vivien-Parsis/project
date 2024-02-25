import { defineStore } from "pinia"
import { filmService } from "../services"

export const useLoginStore = defineStore('login',()=>{
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