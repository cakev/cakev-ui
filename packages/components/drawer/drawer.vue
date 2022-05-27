<template lang="pug">
.c-drawer(v-transfer-dom, :data-transfer="transfer")
	.c-drawer-mask(v-show="currentVal")
	.c-drawer-wrap(v-show="currentVal", @click="close")
	transition(name="transition-slideRight", :style="{ width }")
		.c-drawer-right(v-show="currentVal")
			.c-drawer-header 
				span {{ title }}
				c-svg.c-drawer-close(type="close", @click="close")
			.c-drawer-body
				slot
</template>
<script lang="ts">
import transferDom from '../../directives/transfer-dom'

export default {
	name: 'c-drawer',
	directives: {
		transferDom,
	},
	props: {
		transfer: {
			type: Boolean,
			default: true,
		},
		width: {
			default: '335px',
		},
		value: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
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
	computed: {
		style() {
			return { width: this.width }
		},
	},
	methods: {
		close(): void {
			this.currentVal = false
			this.$emit('input', false)
		},
	},
}
</script>
<style lang="scss">
.c-drawer {
	position: relative;
	z-index: 9999;
}
.c-drawer-body {
	height: calc(100% - 48px);
	padding: 16px;
	overflow: auto;
	font-size: 14px;
	line-height: 1.5;
	word-wrap: break-word;
}
.c-drawer-close {
	margin-right: 8px;
	color: var(--panelFontColor);
	cursor: pointer;
}
.c-drawer-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 48px;
	padding: 0 16px;
	font-size: 16px;
	font-weight: 500;
	line-height: 48px;
	color: var(--panelFontColor);
	text-overflow: ellipsis;
	white-space: nowrap;
	span {
		margin-right: auto;
	}
}
.c-drawer-right {
	position: fixed;
	top: 0;
	right: 0;
	width: 30%;
	height: 100vh;
	background: var(--panelBgColor);
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
}
.c-drawer-wrap {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
}
.c-drawer-mask {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
