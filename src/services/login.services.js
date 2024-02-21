import axios from "axios"
import { api_url } from "../const/config"

export class filmService{
    static async getFilm () {
        const res = await axios.get(api_url+'/api/film/get')
        return res.data
    }
} 
