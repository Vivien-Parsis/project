import { defineStore } from "pinia"
import { serieService } from "../services"

export const useSerieStore = defineStore('serie',()=>{
    async function getSerie (email, password) {
        try{
            return await serieService.getSerie(email, password)
        }
        catch(err){
            console.log(err)
        }
    }
    return { getSerie }
})