<template lang="pug">
input.c-input(
	:value="currentVal",
	:style="{ width, display, height }",
	@focus="$emit('focus', $event)",
	@blur="$emit('blur', $event)",
	@change="$emit('change', $event)",
	@input="$emit('input', $event.target.value)")
</template>
<script>
export default {
	name: 'c-input',
	props: {
		width: {
			default: '',
			type: String,
		},
		height: {
			default: '',
			type: String,
		},
		display: {
			default: 'block',
		},
		value: {},
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
}
</script>
<style lang="scss" scoped>
.c-input {
	width: 100%;
	padding: 4px 8px;
	color: rgb(191, 191, 191);
	background-color: #181b24;
	border: 1px solid #393b4a;
	border-radius: 2px;
	outline: none;
	box-shadow: none;

	&:focus {
		border-color: #2491f7;
	}

	&:hover {
		border-color: #2491f7;
	}
}
</style>
