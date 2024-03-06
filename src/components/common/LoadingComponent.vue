<script setup>
  import { black } from '../../const/style';
</script>
<template>
    <div>
        <img src="../../assets/img/loading.gif">
    </div>
</template>
<style scoped>
  div{
    position: absolute;
    z-index: 1000;
    background-color: v-bind(black);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  div img{
    position: relative;
  }
</style>