<script setup>
    import HeaderComponent from '../components/common/HeaderComponent.vue'
    import NavComponent from '../components/common/NavComponent.vue'
    import FilmList from '../components/film/FilmComponent.vue'
    import FooterComponent from '../components/common/FooterComponent.vue'
</script>
<template>
    <HeaderComponent>Film</HeaderComponent>
    <NavComponent/>
    <main>
        <FilmList/>
    </main>
    <FooterComponent/>
</template>
<style scoped>
main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>
