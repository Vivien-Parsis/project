<script setup>
    import HeaderComponent from '../components/common/HeaderComponent.vue'
    import NavComponent from '../components/common/NavComponent.vue'
    import FilmWatchComponent from '../components/film/FilmWatchComponent.vue'
    import FooterComponent from '../components/common/FooterComponent.vue'
</script>
<template>
    <HeaderComponent>Film</HeaderComponent>
    <NavComponent/>
    <main>
        <FilmWatchComponent/>
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