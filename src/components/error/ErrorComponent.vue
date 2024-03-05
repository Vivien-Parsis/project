<script setup>
    import { useLoadingStore } from '../../store/loading.store'
    import IconComponent from '../common/IconComponent.vue'
    import ErrorIcon from "../../assets/img/error.svg?url"
    const { error, message } = defineProps({
        error:String,
        message:String
    })
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
</script>
<template>
    <h2>
        <IconComponent :src="ErrorIcon"/>
        {{ error ? error : "erreur" }} - {{ message ? message : "" }}
        <IconComponent :src="ErrorIcon"/>
    </h2>
</template>
<style scoped>
    h2{
        color:rgb(124, 47, 47);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>