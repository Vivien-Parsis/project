<script setup>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import FilmList from '../components/FilmListComponent.vue'
</script>
<template>
    <HeaderComponent>Film</HeaderComponent>
    <NavComponent/>
    <div id="filmContainer">
        <FilmList/>
    </div>
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
