import axios from "axios"
import { api_url } from "../const/config"

export class filmService{
    static async getFilm(email, password) {
        const res = await axios.post(api_url+'/api/film/get',{email:email,password:password})
        return res.data
    }
} 
