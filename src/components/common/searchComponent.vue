<script setup>
    import { ref, watch } from "vue"
    import { lighter_blue } from "../../const/style"
    import iconComponent from "./IconComponent.vue"
    import searchLogo from "../../assets/img/search.svg?url"
    const emit = defineEmits(['searchInput'])
    const searchValue = ref("")
    watch((searchValue), (value)=>{
        emit('searchInput', value)
    })
</script>
<template>
    <div>
        <iconComponent :src="searchLogo"/>
        <input type="search" v-model="searchValue">
    </div>
</template>
<style scoped>
    div{
        background-color: v-bind(lighter_blue);
        display: flex;
        width: 100%;
        padding: 1em;
        align-items: center;
        flex-wrap: wrap;
    }
</style>