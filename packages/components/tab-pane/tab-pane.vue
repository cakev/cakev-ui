<template lang="pug">
.c-tab-pane(v-show="active")
	slot
</template>
<script lang="ts">
export default {
	name: 'c-tab-pane',
	props: {
		value: {
			type: [String, Number],
		},
		label: {
			type: [String, Number],
		},
	},
	data() {
		return {
			active: false,
		}
	},
}
</script>
<style lang="scss">
.c-tab-pane {
	position: relative;
	height: 100%;
}
</style>
