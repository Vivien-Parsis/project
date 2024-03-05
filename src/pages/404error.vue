<script setup>
    import HeaderComponent from '../components/common/HeaderComponent.vue'
    import NavComponent from '../components/common/NavComponent.vue'
    import FooterComponent from '../components/common/FooterComponent.vue'
    import ErrorComponent from '../components/error/ErrorComponent.vue'
    import { useLoadingStore } from '../store/loading.store'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
</script>
<template>
    <HeaderComponent>ERROR 404</HeaderComponent>
    <NavComponent/>
    <ErrorComponent error="ERROR 404" message="Not Found"/>
    <FooterComponent/>
</template>