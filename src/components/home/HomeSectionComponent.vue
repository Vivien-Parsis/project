<script setup>
    import HomeSectionLinkComponent from './HomeSectionLinkComponent.vue'
    import IconComponent from '../common/IconComponent.vue'
    import { light_blue, lighter_blue } from '../../const/style'
    const { title, listlink, imgSrc } = defineProps({
        title:String,
        listlink:Array,
        imgSrc:String
    })
</script>

<template>
    <h3>
        <IconComponent v-if="imgSrc":imgSrc="imgSrc"/> 
        {{ title }}
    </h3>
    <li v-for="link in listlink">
        <HomeSectionLinkComponent :link="link.link">{{ link.name }}</HomeSectionLinkComponent>
    </li>
</template>

<style scoped>
    h3{
        display: flex;
        margin: 0;
        padding:0.5em;
        background-color: v-bind(light_blue);
        align-items: center;
        flex-wrap: nowrap;
    }
    li{
        background-color: v-bind(lighter_blue);
        padding:.5em ;
        list-style:none;
    }
</style>