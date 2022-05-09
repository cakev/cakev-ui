<template lang="pug">
c-row.c-select(:class="{'c-select-disabled':disabled,'c-select-focus':focus}" v-click-outside="taggerList")
	.c-select-content(@click="taggerList" @click.stop) {{label}}
	c-svg.c-select-icon(type="arrow-down" :size="14" @click="taggerList" @click.stop)
	.c-select-option-list(v-show="showList")
		slot
</template>
<script lang="ts">
import { findComponentsDownward } from '@cakev/util'
// @ts-ignore
import ClickOutside from 'vue-click-outside'

export default {
	name: 'c-select',
	directives: { ClickOutside },
	props: {
		value: {},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data(props) {
		return {
			currentVal: props.value,
			showList: false,
			focus: false,
			label: props.value,
			childrens: [],
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
	methods: {
		taggerList(): void {
			if (this.disabled) return
			this.focus = !this.focus
			this.showList = !this.showList
		},
		init(v) {
			this.childrens = findComponentsDownward(this, 'c-select-option')
			if (this.childrens) {
				this.childrens.forEach(child => {
					child.active = v ? v === child.value : this.currentVal === child.value
					child.value === this.currentVal ? (this.label = child.label) : void 0
				})
			}
		},
		handleChange(value, label) {
			if (this.disabled) return
			this.label = label
			this.currentVal = value
			this.$emit('on-change', value)
			this.$emit('input', value)
		},
	},
	mounted() {
		this.init(this.value)
	},
}
</script>
<style lang="scss">
.c-select-content {
	position: relative;
	width: 100%;
	height: 28px;
	padding: 4px 40px 4px 8px;
	overflow: hidden;
	color: rgb(191, 191, 191);
	text-overflow: ellipsis;
	white-space: nowrap;
}
.c-select-option-list {
	position: absolute;
	top: calc(100% + 1px);
	left: 0;
	width: 100%;
}
.c-select-icon {
	position: absolute;
	right: 10px;
	color: #fff;
}
.c-select {
	position: relative;
	width: 100%;
	height: 28px;
	font-size: 14px;
	background-color: #181b24;
	border: 1px solid #393b4a;
	border-radius: 2px;
	&.c-select-focus {
		border-color: #2491f7;
	}
	&:hover {
		border-color: #2491f7;
	}
	&.c-select-disabled {
		cursor: no-drop;
		border-color: #393b4a;
	}
}
</style>
