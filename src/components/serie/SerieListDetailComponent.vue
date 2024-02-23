<script setup>
    const {ListSerie} = defineProps({
        ListSerie:Array
    })
</script>
<template>
    <div v-for="serie in ListSerie">
        <h3 v-text="serie.nom"></h3>
        <iframe v-bind:src="serie.video"></iframe>
        <p v-text="serie.synospis"></p>
        <router-link v-bind:to="'/serie/watch/'+serie.id">Regarder</router-link>
    </div>
</template>
<style scoped>
div{
    background-color: rgb(206, 206, 206);
    border-radius: 1em;
    margin:2%;
    width:40%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
div h3, div p{
    margin:0
}
div *:not(div){
    margin:1em 0
}
div p{
    text-align: center;
    width: 90%;
}
div a{
    text-decoration: none;
    color:black;
}
div a:hover{
    color:red
}
div iframe{
    width: 90%;
    aspect-ratio:16/9;
}

</style>