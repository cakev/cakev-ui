<template lang="pug">
transition(name="fade")
	c-column.c-loading(v-if="show",)
		c-svg.c-loading-icon(type="loading", :size="48")
		span {{ text }}
</template>
<script lang="ts">
export default {
	name: 'c-loading',
	props: {
		show: {
			type: Boolean,
			default: true,
		},
		text: {
			type: String,
			default: '请稍后…',
		},
	},
}
</script>
<style lang="scss">
@keyframes rotate {
	0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
}

.c-loading-icon {
	animation: rotate infinite 1s;
}

.c-loading {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #e2e2e2;
	background-color: rgba(0, 0, 0, 0.4);
}
</style>
