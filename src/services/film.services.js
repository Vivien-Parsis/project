import axios from "axios"
import { api_url } from "../const/config"

export class loginService{
    static async signIn (email, password) {
        const res = await axios.post(api_url+'/api/login/signin',{email:email,password:password})
        return res.data
    }
} 