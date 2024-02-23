import axios from "axios"
import { api_url } from "../const/config"

export class serieService{
    static async getSerie () {
        const res = await axios.get(api_url+'/api/serie/get')
        return res.data
    }
    
} 
