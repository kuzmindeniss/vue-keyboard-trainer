<script setup lang="ts">

defineProps<{
	text: string;
	hreff: string;
}>();

</script>

<template>
	<a :href="hreff" class="text-wrapper__button">{{ text }}</a>
</template>

<style lang="scss" scoped>
.text-wrapper__button {
	display: inline-block;
	padding: 10px 60px;
	position: relative;
	background: url('@/assets/button-bg-blue.svg') no-repeat;
	background-size: cover;
	transition: all .5s;
	color: #fff;
	border-radius: 32px;
	font-size: .9rem;
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);

	&:hover {
		opacity: .82;
		transform: scale(1.02);
	}
}

</style>