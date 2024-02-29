import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoadingStore = defineStore('loading',()=>{
    const loading = ref(true)
    function getLoading(){
        return loading.value
    }
    function setLoading(value){
        loading.value = value
    }
    return { getLoading, setLoading}
})