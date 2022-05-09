<template lang="pug">
.c-row(:style="{ alignItems: align }" v-bind="{ ...$props, ...$attrs }", v-on="$listeners",)
	slot
</template>
<script lang="ts">
export default {
	name: 'c-row',
	props: {
		align: {
			default: 'center',
		},
	},
}
</script>
<style lang="scss">
.c-row {
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>
