<template lang="pug">
.c-tab-pane(v-show="active")
	slot
</template>
<script lang="ts">
import { findComponentUpward } from '@cakev/util'

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
	mounted() {
		const parent = findComponentUpward(this, 'c-tabs')
		parent.init()
	},
}
</script>
<style lang="scss">
.c-tab-pane {
	position: relative;
	height: 100%;
}
</style>
