<template lang="pug">
label.c-upload-img(:for="id")
	input(:id="id" type="file" @change="handleUpload" accept="image/*")
	span(v-if="!currentVal") 点击上传
	img(:src="currentVal")
</template>
<script lang="ts">
export default {
	name: 'c-upload-img',
	props: {
		value: {
			type: String,
		},
	},
	data(props) {
		return {
			id: `c-upload-${Date.now()}`,
			currentVal: props.value,
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
	methods: {
		handleUpload(e) {
			if (e.target.files.length) {
				const file = e.target.files[0]
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onloadend = e => {
					this.currentVal = e.target.result
					this.$emit('input', e.target.result)
				}
			}
		},
	},
}
</script>
<style lang="scss">
.c-upload-img {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	font-size: var(--panelFontSize);
	color: var(--panelFontColor);
	cursor: pointer;
	border: 1px solid var(--contentBorderColor);
	input {
		display: none;
	}
	img {
		max-width: 100%;
		max-height: 100%;
	}
}
</style>
