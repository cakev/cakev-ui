<template lang="pug">
.c-collapse.c-collapse-default
	.c-collapse-title(
		:class="{ active:currentVal }",
		@click="taggerPanel")
		c-svg.c-collapse-title-down(:size="12" type="arrow-down")
		label {{ label }}
		.c-collapse-title-right
			c-tooltip(v-for="item in icon", :content="item.msg" placement="top")
				c-svg.c-collapse-title-icon(
					:type="item.icon",
					@click="handleIconClick(item.icon)",
					:size="14",
					@click.stop)
	.c-collapse-content(
		:class="{ active:currentVal }",
		:style="{ height: currentVal ? '' : '0' }")
		slot
</template>
<script lang="ts">
export default {
	name: 'c-collapse-default',
	props: {
		label: {
			type: String,
		},
		icon: {
			type: Array,
			default: () => [],
		},
		value: {
			type: Boolean,
			default: false,
		},
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
	methods: {
		taggerPanel(): void {
			this.currentVal = !this.currentVal
			this.$emit('input', this.currentVal)
		},
		handleIconClick(value): void {
			this.currentVal = true
			this.$emit('input', true)
			this.$emit('icon-click', value)
		},
	},
}
</script>
