<template lang="pug">
.c-switch(@click="handleClick" :class="{active:currentVal}")
</template>
<script lang="ts">
export default {
	name: 'c-switch',
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	data(props) {
		return {
			currentVal: props.value,
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
	methods: {
		handleClick() {
			this.currentVal = !this.currentVal
			this.$emit('input', this.currentVal)
		},
	},
}
</script>
<style lang="scss">
.c-switch {
	position: relative;
	width: 28px;
	height: 16px;
	line-height: 14px;
	cursor: pointer;
	user-select: none;
	background-color: transparent;
	border-color: var(--panelFontColor);
	border-style: solid;
	border-width: 1px;
	border-radius: 28px;
	transition: all 0.3s;
	&::after {
		position: absolute;
		top: 1px;
		left: 2px;
		width: 12px;
		height: 12px;
		cursor: pointer;
		content: '';
		background-color: var(--panelFontColor);
		border-radius: 18px;
		transition: all 0.3s;
	}
	&.active {
		background-color: var(--panelFontColor);
		&::after {
			left: 13px;
			background-color: var(--panelBgColor);
		}
	}
}
</style>
