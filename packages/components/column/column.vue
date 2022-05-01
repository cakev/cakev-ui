<template lang="pug">
.c-column(:style="{ alignItems: align }")
	slot
</template>
<script>
export default {
	name: 'c-column',
	props: {
		align: {
			default: 'center',
		},
	},
}
</script>
<style lang="scss" scoped>
.c-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4px 0;
}
</style>
