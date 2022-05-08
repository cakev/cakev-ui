<template lang="pug">
svg.c-svg(
	v-else,
	aria-hidden="true",
	v-on="$listeners",
	:style="{ width: `${size}px`, height: `${size}px`,color }")
	use(:xlink:href="`#cake-ui-${type}`")
</template>
<script lang="ts">
export default {
	name: 'c-svg',
	props: {
		color: {
			type: String,
		},
		type: {
			type: String,
		},
		size: {
			type: Number,
			default: 20,
		},
	},
}
</script>
<style lang="scss">
.c-svg {
	overflow: hidden;
	fill: currentColor;
}
</style>
