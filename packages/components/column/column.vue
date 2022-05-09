<template lang="pug">
.c-column(:style="{ alignItems: align }" v-bind="{ ...$props, ...$attrs }", v-on="$listeners",)
	slot
</template>
<script lang="ts">
export default {
	name: 'c-column',
	props: {
		align: {
			default: 'center',
		},
	},
}
</script>
<style lang="scss">
.c-column {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
