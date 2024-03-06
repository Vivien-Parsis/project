<script setup>
    import { computed } from 'vue'
    import { sky_blue } from "../../const/style"
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
        background-color: v-bind(sky_blue);
        position: fixed;
        width: 100%;
        padding: 0.5em 0;
        bottom: 0;
        text-align: center;
    }
</style>