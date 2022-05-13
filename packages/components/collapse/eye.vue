<template lang="pug">
.c-collapse.c-collapse-eye
	.c-collapse-title(
		:class="{ active:currentVal, enable: !currentEnable }",
		@click="handleClick")
		c-svg.c-collapse-title-down(:size="12" type="arrow-down")
		label {{ label }}
		.c-collapse-title-right
			c-tooltip(:content="icon.msg" placement="top")
				c-svg.c-collapse-title-icon(
					:type="icon.type",
					@click.stop.prevent="handleIconClick",
					:size="14")
	.c-collapse-content(
		:class="{ active:currentVal }",
		:style="{ height: currentVal ? '' : '0' }")
		slot(v-if="enable")
</template>
<script lang="ts">
export default {
	name: 'c-collapse-eye',
	props: {
		label: {
			type: String,
		},
		enable: {
			type: Boolean,
		},
		value: {
			type: Boolean,
			default: false,
		},
	},
	data(props) {
		return {
			currentVal: props.value,
			currentEnable: props.enable,
		}
	},
	computed: {
		icon() {
			if (this.currentEnable) {
				return {
					type: 'eye-off',
					msg: '关闭',
				}
			}
			return {
				type: 'eye',
				msg: '开启',
			}
		},
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
		enable(val) {
			this.currentEnable = val
		},
	},
	methods: {
		handleClick(): void {
			if (this.currentEnable) {
				this.currentVal = !this.currentVal
				this.$emit('input', this.currentVal)
			}
		},
		handleIconClick(): void {
			if (this.currentEnable) {
				this.currentVal = false
				this.$emit('close-click')
			} else {
				this.currentVal = true
				this.$emit('open-click')
			}
		},
	},
}
</script>
<style lang="scss">
.c-collapse-eye {
	.c-collapse-title {
		&.enable {
			label,
			.c-collapse-title-down {
				color: rgb(102, 102, 102);
			}
		}
	}
}
</style>
