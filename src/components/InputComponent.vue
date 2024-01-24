<script setup>
    const {inputData} = defineProps({
        inputData:Object
    })
</script>
<template>
    <input v-if="inputData.type == 'email' ||  inputData.type == 'password' || inputData.type == 'text' "
        :type="inputData.type"
        :placeholder="inputData.placeholder ? inputData.placeholder : 'insert text here...'"
        :name="inputData.name ? inputData.name : ''"
        :autocomplete="inputData.autocomplete ? inputData.autocomplete : 'off'"
    >
    <textarea v-else-if="inputData.type=='textarea'"
        :name="inputData.name ? inputData.name : ''"
        :placeholder="inputData.placeholder ? inputData.placeholder : 'insert text here..'"
        :autocomplete="inputData.autocomplete ? inputData.autocomplete : 'off'"
    >
    </textarea>
    <input v-else
        type="text"
        :placeholder="inputData.placeholder ? inputData.placeholder : 'insert text here..'"
        :name="inputData.name ? inputData.name : ''"
        :autocomplete="inputData.autocomplete ? inputData.autocomplete : 'off'"
    >
</template>
<style>

</style>