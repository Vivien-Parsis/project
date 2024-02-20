<script setup>
    const {ListFilm} = defineProps({
        ListFilm:Array
    })
    console.log(ListFilm)
</script>
<template>
    <div v-for="film in ListFilm">
        <h4 v-text="film.nom"></h4>
        <iframe v-bind:src="film.video"></iframe>
        <p v-text="film.synospis"></p>
        <router-link v-bind:to="'/film/watch/'+film.id">Regarder</router-link>
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
div h4, div p{
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