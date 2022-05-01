<template lang="pug">
.c-switch(@click="handleClick" :class="{active:currentVal}")
</template>
<script>
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
<style lang="scss" scoped>
.c-switch {
	position: relative;
	width: 28px;
	height: 16px;
	line-height: 14px;
	cursor: pointer;
	user-select: none;
	background-color: #ccc;
	border-radius: 22px;
	transition: all 0.2s ease-in-out;
	&::after {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 12px;
		height: 12px;
		cursor: pointer;
		content: '';
		background-color: #fff;
		border-radius: 18px;
		transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
	}
	&.active {
		background-color: #2491f7;
		&::after {
			left: 14px;
		}
	}
}
</style>
