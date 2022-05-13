<template lang="pug">
c-row.c-badge(v-bind="{ ...$props, ...$attrs }", v-on="$listeners", :class="{ active }")
	c-tooltip(:content="title", placement="left")
		c-svg(:type="type", :size="22")
</template>
<script lang="ts">
export default {
	name: 'c-badge',
	props: {
		type: {},
		title: {},
		active: {
			default: false,
		},
	},
}
</script>
<style lang="scss" scoped>
.c-badge {
	position: relative;
	justify-content: center;
	width: 46px;
	height: 46px;
	color: var(--panelFontColor);
	cursor: pointer;
	border-bottom: 1px solid var(--contentBorderColor);
	&.active {
		&::before {
			position: absolute;
			top: 5px;
			right: 5px;
			width: 4px;
			height: 4px;
			content: '';
			background-color: var(--themeColor);
			border-radius: 50%;
		}
	}

	&:last-child {
		border: none;
	}
}
</style>
