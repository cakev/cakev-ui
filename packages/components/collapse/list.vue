<template lang="pug">
.c-collapse.c-collapse-list
	c-collapse-default(:label="label", :icon="icon", @icon-click="handleClick")
		c-tabs(v-if="list.length > 0", v-model="currentIndex", @change="handleChange")
			c-tab-pane(v-for="(v, i) in list", :label="`${prefix}${i + 1}`", :value="i")
				slot(v-if="i === currentIndex")
		.c-collapse-list-empty(v-else)
			span 暂无数据
</template>
<script lang="ts">
import CCollapseDefault from './default.vue'

export default {
	name: 'c-collapse-list',
	components: { CCollapseDefault },
	props: {
		index: {
			type: Number,
		},
		label: {
			type: String,
		},
		prefix: {
			type: String,
			default: '配置',
		},
		show: {
			type: Boolean,
			default: false,
		},
		list: {
			default: () => [],
		},
	},
	data(props) {
		return {
			currentIndex: props.index,
			icon: [
				{ icon: 'add', msg: '加一个' },
				{ icon: 'remove', msg: '减一个' },
			],
		}
	},
	watch: {
		index(val) {
			this.currentIndex = val
		},
	},
	methods: {
		handleChange(index) {
			this.$emit('input', index)
		},
		handleClick(value: string): void {
			if (value === 'add') {
				this.$emit('add-click')
			}
			if (value === 'remove') {
				this.$emit('remove-click', this.currentIndex)
				this.currentIndex = 0
				this.$emit('input', this.currentIndex)
			}
		},
	},
}
</script>
<style lang="scss">
.c-collapse-list {
	display: flex;
	flex-direction: column;
}
.c-collapse-list-empty {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	img {
		max-width: 50%;
	}

	span {
		padding: 5px 10px 10px 10px;
		font-size: 12px;
		color: #bfbfbf;
	}
}
</style>
