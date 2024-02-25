<script setup>
    import { ref } from 'vue'
    import HeaderComponent from '../components/HeaderComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import ContactForm from '../components/contact/ContactFormComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    const inputName = ref("")
    
    const getInputName = (value) => {inputName.value = value}
</script>
<template>
    <HeaderComponent>Contact</HeaderComponent>
    <NavComponent/>
    <ContactForm @name="getInputName"/>
    <FooterComponent/>
</template>