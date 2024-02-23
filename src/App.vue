<template >
    <router-view v-slot="{ Component , route }"> 
        <Transition name="slide-fade" mode="out-in">
            <div :key="route.path">
                <component :is="Component">
                </component>
            </div>
        </Transition>
    </router-view>
</template>  

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }  
</style>