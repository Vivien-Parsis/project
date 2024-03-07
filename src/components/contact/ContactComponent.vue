<script setup>
    import ContactFormComponent from './ContactFormComponent.vue'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
</script>
<template>
    <h3>Contactez nous</h3>
    <ContactFormComponent/>
</template>
<style scoped>
    h3{
        text-align: center;
    }
</style>