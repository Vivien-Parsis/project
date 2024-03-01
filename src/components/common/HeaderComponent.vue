<script setup>
</script>
<template>
    <header>
        <h1>
            <slot>Title</slot>
        </h1>
    </header>
</template>

<style scoped>
    header{
        width: 100%;
        padding : 1em 0;
        background-color: aquamarine;
    }
    header h1{
        text-align: center;
        margin:0;
    }
</style>