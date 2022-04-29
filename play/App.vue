<template lang="pug">
.play-box
	c-input(width="152px", v-model="editor.name", @blur="editName = false", :autofocus="true")
	c-label 标签
	c-svg(type="edit")
</template>
<script lang="ts">
export default {
	name: 'play',
	data() {
		return {
			editor: {
				name: '',
			},
			a: '',
			editName: true,
		}
	},
}
</script>
<style lang="scss" scoped>
.play-box {
	margin: 30px;
}
</style>
