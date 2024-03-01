<script setup>
    import HomeSectionLinkComponent from './HomeSectionLinkComponent.vue'
    import IconComponent from '../common/IconComponent.vue'
    const { title, listlink, imgSrc } = defineProps({
        title:String,
        listlink:Array,
        imgSrc:String
    })
</script>

<template>
    <h3>
        <IconComponent :imgSrc="imgSrc"/> 
        {{ title }}
    </h3>
    <li v-for="link in listlink">
        <HomeSectionLinkComponent :link="link.link">{{ link.name }}</HomeSectionLinkComponent>
    </li>
</template>

<style scoped>
    h3{
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }
    li{
        list-style:"> ";
    }
</style>