<template lang="pug">
.c-collapse-list
	c-collapse-default(:title="title", :icon="icon", @icon-click="handleClick")
		.c-collapse-list-tab(v-if="list.length > 0")
			span(@click="handleClickTab(i)", v-for="(v, i) in list", :class="{ active: index === i }") {{ prefix }}{{ i + 1 }}
		.c-collapse-list-empty(v-else)
			span 暂无数据
		template(v-for="(v, i) in list")
			slot(:index="i", :activeIndex="index", :data="v" v-if="i === index")
</template>
<script lang="ts">
import CCollapseDefault from './default.vue'

export default {
	name: 'c-collapse-list',
	components: { CCollapseDefault },
	props: {
		title: {
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
	data() {
		return {
			index: 0,
			icon: [
				{ icon: 'add', msg: '加一个' },
				{ icon: 'remove', msg: '减一个' },
			],
		}
	},
	methods: {
		handleClickTab(index: number): void {
			this.index = index
		},
		handleClick(value: string): void {
			if (value === 'add') {
				this.$emit('add-click')
			}
			if (value === 'remove') {
				this.$emit('remove-click', this.index)
				this.index = 0
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

.c-collapse-list-tab {
	display: flex;
	flex-direction: row;
	padding: 5px 10px 0 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid #393b4a;
	span {
		padding-bottom: 5px;
		margin-right: 10px;
		cursor: pointer;
		&:last-child {
			margin-bottom: 0;
		}

		&.active {
			color: #2491f7;
			border-bottom: 1px solid #2491f7;
		}
	}
}
</style>
