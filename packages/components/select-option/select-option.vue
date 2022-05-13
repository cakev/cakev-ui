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
	font-size: var(--panelFontSize);
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	list-style: none;
	cursor: pointer;
	user-select: none;
	background-color: var(--panelBgColor);
	transition: all 0.3s;
	&.c-option-select {
		color: #fff;
		background-color: var(--themeColor);
	}
	&:hover {
		color: var(--themeColor);
		&.c-option-select {
			color: #fff;
		}
	}
}
</style>
