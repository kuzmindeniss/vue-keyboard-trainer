<script setup lang="ts">import { onMounted, onUnmounted, ref } from 'vue';
import TextString from './TextString.vue';
import Keyboard from './Keyboard.vue';

    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const currentPosition = ref<number>(0);
    const failIndexes = ref<{[key: number]: boolean}>({});

    function buttonPressed(e: KeyboardEvent): void {
        const keyPressed = e.key;
        if (keyPressed === text[currentPosition.value]) currentPosition.value++;
        else failIndexes.value[currentPosition.value] = true;
    }

    onMounted(() => {
        window.addEventListener("keypress", buttonPressed);
    })
    onUnmounted(() => {
        window.removeEventListener("keypress", buttonPressed)
    })
</script>

<template>
<div class="wrapper">
    <div class="inner-wrapper">
        <h1>Typing</h1>
        <TextString :text="text" :current-position="currentPosition" :fail-indexes="failIndexes" />
        <Keyboard />
    </div>
</div>
</template>

<style lang="scss" scoped>
.wrapper {
	padding: 24px;
	position: relative;
	min-height: 100%;
    height: 1px;
	max-width: 1060px;
	margin-left: auto;
	margin-right: auto;
}
.inner-wrapper {
    position: relative;
    padding: 24px;
	min-height: 100%;
    height: 1px;
	overflow-y:auto;
	overflow-x: hidden;
	border-radius: 24px;
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	&::-webkit-scrollbar-track {
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb{
		border-radius: 10px;
		background: rgba(0,0,0,0.1);
	}
	&::-webkit-scrollbar-thumb:hover{
		background: rgba(0,0,0,0.4);
	}
	&::-webkit-scrollbar-thumb:active{
		background: rgba(0,0,0,.9);
	}
}
</style>