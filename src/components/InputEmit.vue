<script setup>
    import { watch , ref } from 'vue'
    const input = ref("")
    watch((input), (value)=>{
        emit('message',value)
    })
    const emit = defineEmits(['message'])
</script>
<template>
    <input placeholder="emit" v-model="input" name="emit">
</template>