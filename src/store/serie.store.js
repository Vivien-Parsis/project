import { defineStore } from "pinia"
import { serieService } from "../services/serie.services"

export const useSerieStore = defineStore('serie',()=>{
    async function getSerie (email, password) {
        try{
            return await serieService.getSerie(email, password)
        }
        catch(err){
            console.log(err)
        }
    }
    async function searchSerie (email, password, id) {
        try{
            return await serieService.searchSerie(email, password, id)
        }
        catch(err){
            console.log(err)
        }
    }
    return { getSerie, searchSerie }
})