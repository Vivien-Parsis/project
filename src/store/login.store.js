import { defineStore } from "pinia"
import { loginService } from "../services"
import { computed, ref } from "vue"

export const useLoginStore = defineStore('login',()=>{
    const user = window.localStorage.getItem("user")==null ? ref([]) : ref(JSON.parse(window.localStorage.getItem("user")))
    const getUser = computed(()=>user.value)
    async function signIn (email, password) {
        try{
            const res = await loginService.signIn(email, password)
            user.value = res.email!=undefined && res.password!=undefined ? {email:email, password:password} : user.value
            window.localStorage.setItem("user",JSON.stringify(user.value))
        }
        catch(err){
            console.log(err)
        }
    }
    function signOut() {
        user.value = []
    }
    async function signUp (email, password) {
        try{
            const res = await loginService.signUp(email, password)
            user.value = res.message=="successfully sign up" ? {email:email, password:password} : user.value
            window.localStorage.setItem("user",JSON.stringify(user.value))
        }
        catch(err){
            console.log(err)
        }
    }
    function signOut() {
        user.value = []
        window.localStorage.removeItem("user")
    }
    return { signIn, signUp, signOut, getUser, user}
})