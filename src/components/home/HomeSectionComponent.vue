<script setup>
    import HomeSectionLinkComponent from './HomeSectionLinkComponent.vue';
    const { title, listlink } = defineProps({
        title:String,
        listlink:Array
    })
</script>

<template>
    <h2 v-text="title"></h2>
    <li v-for="link in listlink">
        <HomeSectionLinkComponent :link="link.link">{{ link.name }}</HomeSectionLinkComponent>
    </li>
</template>

<style scoped>
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }
    div p{
        width: 98%;
        text-align: justify;
    }
</style>