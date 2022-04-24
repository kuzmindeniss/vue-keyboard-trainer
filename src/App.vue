<script setup lang="ts">
import Headband from "./components/Headband/Headband.vue";
import TypingPractice from "./components/TypingPractice/TypingPractice.vue";
</script>

<template>
<div class="root-wrapper">
    <!-- <Headband /> -->
    <TypingPractice />
</div>
</template>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/base.scss';

#app {
    height: 1px;
    min-height: 100vh;
}

.root-wrapper {
    height: 100%;
}
</style>
