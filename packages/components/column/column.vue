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
<style lang="scss">
.c-column {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
