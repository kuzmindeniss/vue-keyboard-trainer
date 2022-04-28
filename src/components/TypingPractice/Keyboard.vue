<script setup lang="ts">
import buttonsJson from "./buttons.json";
import KeyboardButton from "./KeyboardButton.vue";
import type { KeyboardButtonSvgType } from "@/types";
import { text, currentPosition } from "./TypingPracticeStore";

const nextLetterCode = text.value[currentPosition.value];
</script>

<template>
    <svg class="keyboard" viewBox="0 0 1000 250">
        <rect class="border" width="1000" height="250" rx="10" ry="10" />
        <svg x="21" y="21">
            <KeyboardButton v-for="(button, key) in buttonsJson as {[key: string]: KeyboardButtonSvgType}" :item="button" :key="key"/>
        </svg>
    </svg>
</template>

<style>
.keyboard {
    margin-top: 100px;
    aspect-ratio: 1000/250;
    user-select: none;
}

.border {
    fill: #dfd9d9;
}

.button {
    fill: #efefee;
    transition: all .3s;
}

.keyboard {
    font-size: 11px;
}

.gray .button {
    fill: #e3e3e1;
}

.gray .pressed {
    fill: #22211f;
}

.next {
    fill: yellow;
}

.pressed .button {
    fill: #42403e;
}
</style>