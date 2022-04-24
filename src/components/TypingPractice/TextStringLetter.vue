<script setup lang="ts">
const props = defineProps<{
    letter: string;
    index: number;
    failIndexes: {[key: number]: boolean};
}>();

const isWrong = props.failIndexes[props.index];
</script>

<template>
<span v-if="!isWrong" class="letter-typed">{{ letter }}</span>
<span v-else class="letter-wrong">{{ letter }}</span>
</template>

<style lang="scss">

</style>