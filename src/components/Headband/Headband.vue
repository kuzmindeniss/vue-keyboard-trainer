<script setup lang="ts">
import ButtonSvg from "@/components/common/ButtonSvg.vue";
import CompSsvg from "./CompSsvg.vue";
</script>

<template>
<div class="wrapper">
	<div class="inner-wrapper">
		<div class="text-wrapper">
			<h1 >Practice Touch Typing!</h1>
			<ButtonSvg text="Get Started" hreff="#"/>
		</div>
		<div class="comp-svg">
			<CompSsvg/>
		</div>
	</div>
</div>
</template>

<style lang="scss" scoped>

.wrapper {
	padding: 24px;
	position: relative;
	height: 100%;
	max-width: 1060px;
	margin-left: auto;
	margin-right: auto;
}
.inner-wrapper {
	height: 100%;
	border-radius: 24px;
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	background: url("@/assets/Live-Background.svg");
}
.text-wrapper {
	position: absolute;
	left: 100px;
	top: 50%;
	transform: translate(0, -50%);

	h1 {
		font-size: 2.5rem;
		margin-bottom: 16px;
	}
}

.comp-svg {
	position: absolute;
	right: 100px;
	top: 50%;
	transform: translate(0, -50%);
	width: 200px;
	height: 265px;
}

</style>