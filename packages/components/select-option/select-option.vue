<template lang="pug">
.c-option(@click="handleClick" :class="{'c-option-select':active}") {{  label  }}
</template>
<script lang="ts">
import { findComponentUpward } from '@cakev/util'

export default {
	name: 'c-select-option',
	props: {
		label: {
			type: [String, Number],
		},
		value: {
			type: [String, Number],
		},
	},
	data() {
		return {
			active: false,
		}
	},
	methods: {
		handleClick(): void {
			this.active = true
			const parent = findComponentUpward(this, 'c-select')
			parent.handleChange(this.value, this.label)
			parent.init(this.value)
			parent.taggerPanel()
		},
	},
}
</script>
<style lang="scss">
.c-option {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 28px;
	padding: 7px 16px;
	margin: 0;
	overflow: hidden;
	font-size: 14px;
	color: rgb(191, 191, 191);
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	list-style: none;
	cursor: pointer;
	background-color: #2d2f38;
	transition: background 0.2s ease-in-out;
	&.c-option-select {
		color: #fff;
		background-color: #2d8cf0;
	}
	&:hover {
		color: #fff;
		background-color: #57a3f3;
	}
}
</style>
