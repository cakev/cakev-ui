<template lang="pug"></template>
<script>
export default {
	name: 'c-select',
	props: {
		value: {},
	},
	data(props) {
		return {
			currentVal: props.value,
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
}
</script>
