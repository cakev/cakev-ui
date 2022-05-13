<template lang="pug">
c-column.c-tabs
	c-row.c-tabs-list
		.c-tabs-item(v-for="(item,index) in list" :class="{active:item.value===currentVal,self:list.length===1}" @click="handleClick(index)") {{item.label}}
	.c-tabs-children
		slot
</template>
<script lang="ts">
import { findComponentsDownward } from '@cakev/util'

export default {
	name: 'c-tabs',
	props: {
		value: {
			type: [String, Number],
		},
	},
	data(props) {
		return {
			currentVal: props.value,
			children: [],
			list: [],
		}
	},
	watch: {
		value: {
			handler(val) {
				this.currentVal = val
			},
			immediate: true,
		},
	},
	mounted() {
		this.init()
	},
	methods: {
		handleClick(index) {
			this.currentVal = this.list[index].value
			this.children.forEach(child => {
				child.active = false
				if (this.currentVal === child.value) {
					child.active = true
				}
			})
			this.$emit('input', this.list[index].value)
		},
		init() {
			this.children = findComponentsDownward(this, 'c-tab-pane')
			if (this.children) {
				this.children.forEach(child => {
					child.active = false
					if (this.currentVal === child.value) {
						child.active = true
					}
					this.list.push({
						label: child.label,
						value: child.value,
					})
				})
			}
		},
	},
}
</script>
<style lang="scss">
.c-tabs-children {
	flex: 1;
	width: 100%;
}
.c-tabs {
	font-size: var(--panelFontSize);
}
.c-tabs-item {
	position: relative;
	flex: 1;
	height: 40px;
	line-height: 40px;
	color: #d8d8d8;
	cursor: pointer;
	&:hover {
		background-color: #27292a;
	}
	&.active {
		color: #d8d8d8;
		background-color: #4e5254;
		&::before {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 4px;
			content: '';
			background-color: var(--themeColor);
		}
	}
	&.self {
		background-color: var(--middleBgColor);
		&::before {
			display: none;
		}
	}
}
.c-tabs-list {
	width: 100%;
	background-color: #3c3f41;
}
</style>
