<script setup lang="ts">
import type { KeyboardButtonSvgType } from '@/types';

const props = defineProps<{
    item: KeyboardButtonSvgType
}>();


</script>

<template>
    <svg :x="item.x" :y="item.y">
        <path class="button" :d="item.path.d" />
        <text v-if="item.text" :x="item.text.x" :y="item.text.y" v-html="item.text.value"></text>
        <text v-if="item.text1" :x="item.text1.x" :y="item.text1.y" v-html="item.text1.value" :text-anchor="!item.text1.textAnchor ? 'end' : ''"></text>
    </svg>
</template>