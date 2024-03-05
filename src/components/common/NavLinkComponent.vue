<script setup>
    const { check, cssClass, to, name } = defineProps({
        check:Boolean,
        cssClass:String,
        to:String,
        name:String
    })
</script>
<template>
    <router-link v-if="check" :class="cssClass" :to="to"> {{ name ? name : "link" }} </router-link>
</template>