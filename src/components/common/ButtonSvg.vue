<script setup lang="ts">
import { gsap } from 'gsap';

defineProps<{
	text: string;
	hreff: string;
}>();

function hover(payload: MouseEvent) {
	// const el = payload.target;
	// gsap.to(el, {color: "red", duration: 2});
}
</script>

<template>
	<a :href="hreff" class="text-wrapper__button" @mousemove="hover">{{ text }}</a>
</template>

<style lang="scss" scoped>
.text-wrapper__button {
	display: inline-block;
	padding: 12px 60px;
	position: relative;
	background: url('@/assets/button-bg-blue.svg') no-repeat;
	background-size: cover;
	transition: all .5s;
	color: #fff;
	border-radius: 32px;
	font-size: .9rem;

	&:hover {
		opacity: .82;
		transform: scale(1.02);
	}
}

</style>