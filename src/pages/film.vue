<script setup>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import FilmList from '../components/film/FilmComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
</script>
<template>
    <HeaderComponent>Film</HeaderComponent>
    <NavComponent/>
    <div id="filmContainer">
        <FilmList/>
    </div>
    <FooterComponent/>
</template>
<style scoped>
#filmContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>
