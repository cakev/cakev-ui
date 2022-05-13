<template lang="pug">
c-row.c-select(:class="{'c-select-disabled':disabled,'c-select-focus':focus,'c-select-no-border':!border}" v-click-outside="hidePanel")
	.c-select-content(@click="taggerPanel" @click.stop)
		.c-input-placeholder(v-if="!currentVal") {{placeholder}}
		span {{label}}
	c-svg.c-select-clearable(v-if="clearable && currentVal" type="add" :size="14" @click="handleClear" @click.stop)
	c-svg.c-select-icon(type="arrow-down" :size="14" @click="taggerPanel" @click.stop)
	.c-select-option-list(v-show="showList")
		slot
</template>
<script lang="ts">
import { findComponentsDownward } from '@cakev/util'
import clickOutside from '../../directives/click-outside'

export default {
	name: 'c-select',
	directives: { clickOutside },
	props: {
		value: {},
		disabled: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: '',
		},
		clearable: {
			type: Boolean,
			default: false,
		},
		border: {
			type: Boolean,
			default: true,
		},
	},
	data(props) {
		return {
			currentVal: props.value,
			showList: false,
			focus: false,
			label: props.value,
			children: [],
		}
	},
	watch: {
		value: {
			handler(val) {
				this.currentVal = val
				this.$nextTick(() => {
					this.init(val)
				})
			},
			immediate: true,
		},
	},
	methods: {
		handleClear(): void {
			if (this.disabled) return
			this.label = ''
			this.currentVal = ''
			this.$emit('change', '')
			this.$emit('input', '')
		},
		hidePanel(): void {
			this.focus = false
			this.showList = false
		},
		taggerPanel(): void {
			if (this.disabled) return
			this.focus = !this.focus
			this.showList = !this.showList
		},
		init(v) {
			this.children = findComponentsDownward(this, 'c-select-option')
			if (this.children) {
				this.children.forEach(child => {
					child.active = v ? v === child.value : this.currentVal === child.value
					child.value === this.currentVal ? (this.label = child.label) : void 0
				})
			}
		},
		handleChange(value, label) {
			if (this.disabled) return
			this.label = label
			this.currentVal = value
			this.$emit('change', value)
			this.$emit('input', value)
		},
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
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	user-select: none;
}
.c-select-option-list {
	position: absolute;
	top: calc(100% + 1px);
	left: 0;
	width: 100%;
	max-height: 28 * 5px;
	overflow-y: auto;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.c-select-clearable {
	position: absolute;
	right: 30px;
	display: none;
	color: #fff;
	cursor: pointer;
	transform: rotate(45deg);
}
.c-select-icon {
	position: absolute;
	right: 10px;
	cursor: pointer;
}
.c-select {
	position: relative;
	width: 100%;
	height: 28px;
	font-size: var(--panelFontSize);
	color: var(--panelFontColor);
	background-color: var(--panelBgColor);
	border: 1px solid var(--contentBorderColor);
	border-radius: var(--panelBorderRadius);
	transition: all 0.3s;
	&.c-select-focus {
		z-index: 9999;
		border-color: var(--themeColor);
		box-shadow: var(--themeBoxshowColor);
	}
	&.c-select-disabled {
		.c-select-content {
			cursor: no-drop;
		}
		.c-select-icon {
			cursor: no-drop;
		}
		.c-select-clearable {
			display: none;
		}

		color: var(--panelDisabeldFontColor);
	}
	&.c-select-no-border {
		border: none;
	}
}
</style>
