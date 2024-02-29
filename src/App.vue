<script setup>
    import LoadingComponent from './components/LoadingComponent.vue';
    import { ref } from 'vue'
    import { useLoadingStore } from './store/loading.store'
    const loadingStore = useLoadingStore()
</script>

<template>
        <LoadingComponent v-if="loadingStore.getLoading()"/>
        <router-view v-slot="{ Component , route }"> 
            <Transition name="slide-fade" mode="out-in">
                <div :key="route.path" @loading="unableLoading()">
                    <component :is="Component">
                    </component>
                </div>
            </Transition>
        </router-view>
</template>  

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 1.0s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }  
</style>