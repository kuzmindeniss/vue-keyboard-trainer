<script setup lang="ts">
import Headband from "./components/Headband/Headband.vue";
</script>

<template>
<div class="root-wrapper">
    <Headband />
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
