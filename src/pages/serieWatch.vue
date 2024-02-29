<script setup>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import SerieWatchComponent from '../components/serie/SerieWatchComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
</script>
<template>
    <HeaderComponent>Serie</HeaderComponent>
    <NavComponent/>
    <div id="serieContainer">
        <SerieWatchComponent/>
    </div>
    <FooterComponent/>
</template>
<style scoped>
#serieContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>