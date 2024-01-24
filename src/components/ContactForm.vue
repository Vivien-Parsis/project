<script setup>
    import { ref } from 'vue'  
    import axios from 'axios'
    const message = ref("")
    const formValue = ref([])
    const emits = defineEmits()
    const envoyeContact = () => {
        console.log("📨 - message envoyé")
        axios.post('https://vue-project-api-57ap.onrender.com/api/message/send',{
            email:formValue.value.email ? formValue.value.email : '',
            message:formValue.value.message ? formValue.value.message : ''
        })
        for(let item in formValue.value){formValue.value[item]=""}
    }
</script>
<template>
    <div>
        <form>
            <h3>Contact us</h3>
            <input type="email" placeholder="inserer email ici..." v-model="formValue.email">
            <textarea placeholder="inserer message ici..." v-model="formValue.message"></textarea>
            <input type="button" value="envoyez" @click="envoyeContact()"> 
        </form>
        <p>{{ message }}</p>
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