import axios from "axios"
import { api_url } from "../const/config"

export class messageService{
    static async sendMessage (email, message) {
        const res = await axios.post(api_url+'/api/message/send',{message:message, email:email})
        return res.data
    }
} 
