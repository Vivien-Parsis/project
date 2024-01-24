<script setup>
    import { ref } from 'vue'  
    import InputComponent from './InputComponent.vue'
    import InputEmit from './InputEmit.vue'
    const message = ref("")
    const getMessage = (value) => {message.value = value}
    const formContent = ref([
        {
            type:"text",
            placeholder:"nom",
            name:"nom",
            autocomplete:"on"
        },
        {
            type:"email",
            placeholder:"mail",
            name:"mail"
        },
        {
            
        },
        {
            type:"textarea",
            placeholder:"message",
            name:"message"
        }
    ])
</script>
<template>
    <form>
        <h3>Contact us</h3>
        <InputComponent v-for="(value, index) in formContent" :inputData="value" :key="index"/>
        <InputEmit @message="getMessage"/>
    </form>
    <p>{{ message }}</p>
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