<script setup lang="ts">
import ButtonSvg from "@/components/common/ButtonSvg.vue";
import { onMounted, ref } from "vue";
import CompSsvg from "./CompSsvg.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const firstSlide = ref(null);
const secondSlide = ref(null);
const innerWrapper = ref(null);

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
	const tween1 = gsap.to(firstSlide.value, {
		opacity: 0,
		// display: "none",
		scale: 0,
		duration: 1,
		scrollTrigger: {
			trigger: firstSlide.value,
			scroller: innerWrapper.value,
			start: "0%",
			end: "100%",
			pin: true,
			pinSpacing: false,
			scrub: 0.5,
		}
	});

	const tween2 = gsap.from(secondSlide.value, {
		opacity: 0,
		rotation: 180,
		scrollTrigger: {
			trigger: secondSlide.value,
			scroller: innerWrapper.value,
			start: "-50%",
			end: "50%",
			pin: true,
			scrub: 0.5,
		}
	})
})

</script>

<template>
<div class="wrapper">
	<div class="inner-wrapper" ref="innerWrapper">
		<div class="first-slide" ref="firstSlide">
			<div class="text-wrapper">
				<h2 >Practice Touch Typing!</h2>
				<ButtonSvg text="Get Started" hreff="#"/>
			</div>
			<div class="comp-svg">
				<CompSsvg/>
			</div>
		</div>
		<div class="second-slide" ref="secondSlide">
			<div class="second-slide__img"></div>
			<div>
				<h2> It can improve your typing speed and accuracy dramatically</h2>
				<ButtonSvg text="Start!" hreff="#"/>
			</div>
			
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
	overflow-y:auto;
	overflow-x: hidden;
	border-radius: 24px;
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	background: url("@/assets/Live-Background.svg");
	min-height: 400px;

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
.text-wrapper {
	h2 {
		font-size: 2.5rem;
		margin-bottom: 16px;

		@media (max-width: 600px) {
			font-size: 2rem;
		}
	}
}

.second-slide {
	h2 {
		font-size: 1.5rem;
		margin-bottom: 16px;

		@media (max-width: 600px) {
			font-size: 1rem;
		}
	}
}

.first-slide {
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	padding: 24px;
}

.comp-svg {
	width: 200px;
}

.second-slide {
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	padding: 24px;

	&__img {
		width: 60%;
		max-width: 600px;
		background: url("@/assets/second-slide.png") no-repeat;
		background-position: center;
		background-size: contain;
		align-self: stretch;
		margin-right: 30px;
	}
}

</style>