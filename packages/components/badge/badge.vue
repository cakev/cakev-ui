<template lang="pug">
c-row.c-badge(v-bind="{ ...$props, ...$attrs }", v-on="$listeners", :class="{ active }")
	c-tooltip(:content="title", placement="left")
		c-svg(:type="type", :size="22" color="#fff")
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
	color: #bfbfbf;
	cursor: pointer;
	border-bottom: 1px solid #393b4a;

	&.active {
		&::before {
			position: absolute;
			top: 5px;
			right: 5px;
			width: 4px;
			height: 4px;
			content: '';
			background-color: #2491f7;
			border-radius: 50%;
		}
	}

	&:last-child {
		border: none;
	}
}
</style>
