<script setup lang="ts">
import { failIndexes } from './TypingPracticeStore';

const props = defineProps<{
    letter: string;
    index: number;
}>();

const isWrong = failIndexes.value[props.index];
</script>

<template>
<span v-if="!isWrong" class="letter-typed">{{ letter }}</span>
<span v-else class="letter-wrong">{{ letter }}</span>
</template>

<style lang="scss">

</style>