<script setup lang="ts">
import type { KeyboardButtonSvgType } from '@/types';
import { computed } from 'vue';
import { text, currentPosition } from "./TypingPracticeStore";

const props = defineProps<{
    item: KeyboardButtonSvgType;
}>();

const isNextButton = computed(() => {
    let firstValue = props.item.text ? props.item.text.value : null;
    let secondValue = props.item.text1 ? props.item.text1.value : null;
    if (!firstValue && !secondValue) firstValue = ' ';

    const nextLetter = text.value[currentPosition.value];
    if (nextLetter === firstValue || nextLetter === secondValue) return true;
    if (firstValue) {
        if (nextLetter === firstValue.toLowerCase() || nextLetter === firstValue.toUpperCase()) return true;
    }
    if (secondValue) {
        if (nextLetter === secondValue?.toLowerCase() || nextLetter === secondValue?.toUpperCase()) return true;
    }

    return false;
});

const classObject = computed(() => ({
    next: isNextButton.value
}))


</script>

<template>
    <svg :x="item.x" :y="item.y">
        <path class="button" :class="classObject" :d="item.path.d" />
        <text v-if="item.text" :x="item.text.x" :y="item.text.y" v-html="item.text.value" :text-anchor="!item.text.textAnchor ? '' : item.text.textAnchor"></text>
        <text v-if="item.text1" :x="item.text1.x" :y="item.text1.y" v-html="item.text1.value" :text-anchor="!item.text1.textAnchor ? 'end' : item.text1.textAnchor"></text>
    </svg>
</template>