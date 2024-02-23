<script setup>
    const {link} = defineProps({
        link:String
    })
</script>
<template>
    <a :href="link">
        <slot>
            /
        </slot>
    </a>
</template>
<style scoped>
    a{
        color:black;
        text-decoration: none;
    }
    a:hover{
        color:aquamarine;
    }
</style>