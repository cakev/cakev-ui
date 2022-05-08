<template lang="pug">
label.c-label
	slot
</template>
<script lang="ts">
export default {
	name: 'c-label',
}
</script>
<style lang="scss">
.c-label {
	display: block;
	min-width: 60px;
	min-height: 32px;
	margin-right: 10px;
	font-size: 12px;
	line-height: 32px;
	color: rgb(191, 191, 191);
}
</style>
