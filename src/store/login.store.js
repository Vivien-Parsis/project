import { defineStore } from "pinia"
import { loginService } from "../services"
import { computed, ref } from "vue"

export const useLoginStore = defineStore('login',()=>{
    const user = ref([])
    const getUser = computed(()=>user.value)
    async function signIn (email, password) {
        try{
            const res = await loginService.signIn(email, password)
            user.value = res
        }
        catch(err){
            console.log(err)
        }
    }
    function signOut() {
        user.value = []
    }
    return { signIn, getUser, user}
})