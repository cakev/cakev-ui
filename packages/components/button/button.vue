<template lang="pug">
button.c-button(
	:class="{ [`c-button-${type}`]: true, 'c-button-disabled': disabled }",
	v-bind="{ ...$props, ...$attrs }",
	@click="handleClick"
)
	c-row(:style="{ justifyContent: 'center', height: '100%' }")
		span
			slot
</template>
<script lang="ts">
export default {
	name: 'c-button',
	props: {
		type: {
			type: String,
			default: 'default',
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
	font-size: var(--panelFontSize);
	color: var(--panelBgColor);
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	user-select: none;
	background-color: var(--panelFontColor);
	border-color: var(--panelFontColor);
	border-style: solid;
	border-width: 1px;
	border-radius: var(--panelBorderRadius);
	transition: all 0.3s;
	&.c-button-primary {
		color: #fff;
		background-color: var(--themeColor);
		border-color: var(--themeColor);
	}
	&.c-button-disabled {
		color: var(--contentBorderColor);
		cursor: no-drop;
		background-color: transparent;
		border-color: var(--contentBorderColor);
	}
}
</style>
