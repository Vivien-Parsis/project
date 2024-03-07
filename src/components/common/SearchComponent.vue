<script setup>
    import { ref, watch } from "vue"
    import { lighter_blue } from "../../const/style"
    import iconComponent from "./IconComponent.vue"
    import searchLogo from "../../assets/img/search.svg?url"
    const emit = defineEmits(['searchInput'])
    const searchValue = ref("")
    const { placeholder } = defineProps({
        placeholder : String
    })
    const search = () => {
        emit('searchInput', searchValue.value)
    }
</script>
<template>
    <div>
        <iconComponent :src="searchLogo" @click="search()"/>
        <input type="search" v-model="searchValue" :placeholder="placeholder ? placeholder : 'Recherche...'" @keyup.enter="search()">
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