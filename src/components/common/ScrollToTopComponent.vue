<script setup>
    import scrollToTopImg from "../../assets/img/scrollToTop.svg?url"
    import { light_blue } from "../../const/style"
    import { onMounted } from "vue"
    import iconComponent from "./IconComponent.vue"
    onMounted(()=>{
        const scrollToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        }
        const scrollVisibility = () => {
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
            {document.getElementById("BackToTop").style.display = "block"} 
            else 
            {document.getElementById("BackToTop").style.display = "none"}   
        }
        document.getElementById("BackToTop").onclick=scrollToTop
        window.addEventListener('scroll',()=>{scrollVisibility()})
    })
</script>

<template>
    <div id="BackToTop">
        <iconComponent :src="scrollToTopImg"/>
    </div>
</template>
<style scoped>
    div {
        position: fixed;
        z-index: 99;
        bottom: 1em;
        right: 1em;
        display: none;
        font-size: 2em;
        color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0);
        border: 0;
    }

    div img {
        width: 4vh;
        padding: 1vh;
        background-color: v-bind(light_blue);
        border-radius: 100%;
        box-shadow: 0px 0px 5px 3px #000000;
    }
</style>