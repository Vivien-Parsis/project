<script setup>
    import { ref } from 'vue'
    import { messageService } from "../../services"
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
    const formValue = ref([])
    const errorMessage = ref("")

    const envoyeContact = async () => {
        const email=formValue.value.email ? formValue.value.email : ''
        const message=formValue.value.message ? formValue.value.message : ''
        const res = await messageService.sendMessage(email, message)
        if(res == "message send"){
            for(let item in formValue.value){formValue.value[item]=""}
            console.log("📨 - message envoyé")
            errorMessage.value=""
        }else{
            errorMessage.value="error"
        }
    }
</script>
<template>
    <div>
        <form>
            <h3>Contact us</h3>
            <input type="email" placeholder="inserer email ici..." v-model="formValue.email" required>
            <textarea placeholder="inserer message ici..." v-model="formValue.message" required></textarea>
            <input type="button" value="envoyez" @click="envoyeContact()"> 
            <span v-text="errorMessage"></span>
        </form>
    </div>
</template>
<style scoped>
    form{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
    }
    form *{
        margin:.5em 0
    }
</style>