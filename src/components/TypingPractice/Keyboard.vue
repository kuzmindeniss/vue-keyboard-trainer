<script setup lang="ts">
import buttonsJson from "./buttons.json";
import KeyboardButton from "./KeyboardButton.vue";

</script>

<template>
    <svg class="keyboard" viewBox="0 0 1000 250">
        <rect class="border" width="1000" height="250" rx="10" ry="10" />
        <svg x="21" y="21">
            <KeyboardButton v-for="button in buttonsJson" :item="button"/>
        </svg>
    </svg>
</template>

<style>
.keyboard {
    margin-top: 100px;
    aspect-ratio: 1000/250;
}

.border {
    fill: #dfd9d9;
}

.button {
    fill: #efefee;
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

.pressed .button {
    fill: #42403e;
}
</style>