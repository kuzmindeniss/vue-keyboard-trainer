<script setup lang="ts">

</script>

<template>
<div class="wrapper">
    <div class="inner-wrapper">

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
	min-height: 100%;
    height: 1px;
	overflow-y:auto;
	overflow-x: hidden;
	border-radius: 24px;
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
	// background: url("@/assets/Live-Background.svg");

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