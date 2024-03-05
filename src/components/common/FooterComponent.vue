<script setup>
    import { computed } from 'vue'
    const FooterLabel = computed({
        get(){
            const todayYear = new Date().getFullYear()
            return `@VivienP ${todayYear ? "- "+todayYear : ""}`
        }
    })
</script>
<template>
    <footer>
        {{ FooterLabel }}
    </footer>
</template>

<style scoped>
    footer{
        background-color: aquamarine;
        position: fixed;
        width: 100%;
        padding: 0.5em 0;
        bottom: 0;
        text-align: center;
    }
</style>