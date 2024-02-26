import { defineStore } from "pinia"
import { serieService } from "../services"

export const useSerieStore = defineStore('serie',()=>{
    async function getSerie () {
        try{
            return await serieService.getSerie()
        }
        catch(err){
            console.log(err)
        }
    }
    return { getSerie }
})