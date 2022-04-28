<script setup lang="ts">
import { computed, ref } from "vue";
import Headband from "./components/Headband/Headband.vue";
import TypingPractice from "./components/TypingPractice/TypingPractice.vue";

const routes: {
    [key: string]: any
} = {
    '/': Headband,
    '/practice': TypingPractice
}

const currentPath = ref<string>(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || Headband
})
</script>

<template>
    <div class="root-wrapper">
        <Transition appear mode="out-in">
            <component :is="currentView" />
        </Transition>
    </div>
</template>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/base.scss';

.v-enter-active,
.v-leave-active {
    transition: opacity .8s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

#app {
    height: 1px;
    min-height: 100vh;
}

.root-wrapper {
    height: 100%;
}
</style>
