<template lang="pug">
.c-button(:class="[`c-button-${type}`]" v-bind="{ ...$props, ...$attrs }", v-on="$listeners", @click="handleClick")
	c-row(:style="{justifyContent: 'center',height: '100%'}")
		c-svg(type="loading" :style="{margin:'0 4px 0 0'}" :size="14" v-if="loading")
		span
			slot
</template>
<script lang="ts">
export default {
	name: 'c-button',
	props: {
		type: {
			type: String,
			default: '',
		},
		loading: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClick(e) {
			if (this.disabled) return
			this.$emit('click', e)
		},
	},
}
</script>
<style lang="scss">
.c-button {
	display: inline-block;
	height: 32px;
	padding: 0 15px;
	font-size: 14px;
	color: #515a6e;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	user-select: none;
	background-color: #fff;
	border-color: #dcdee2;
	border-style: solid;
	border-width: 1px;
	border-radius: 4px;
	transition: color 0.2s linear, background-color 0.2s linear, border 0.2s linear, box-shadow 0.2s linear;
	&:focus {
		box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
	}
	&:hover {
		color: #57a3f3;
		background-color: #fff;
		border-color: #57a3f3;
	}
	&.c-button-primary {
		color: #fff;
		background-color: #2d8cf0;
		border-color: #2d8cf0;
		&:focus {
			box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
		}
		&:hover {
			background-color: #57a3f3;
			border-color: #57a3f3;
		}
	}
	&.c-button-disabled {
		cursor: no-drop;
	}
}
</style>
