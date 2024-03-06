<script setup>
    import { black, orange } from '../../const/style'
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
        color:v-bind(black);
        text-decoration: none;
    }
    a:hover{
        color:v-bind(orange);
    }
</style>