<template lang="pug">
.c-row(:style="{ alignItems: align }")
	slot
</template>
<script>
export default {
	name: 'c-row',
	props: {
		align: {
			default: 'center',
		},
	},
}
</script>
<style lang="scss" scoped>
.c-row {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 4px 0;
}
</style>
