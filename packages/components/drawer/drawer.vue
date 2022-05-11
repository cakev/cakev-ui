<template lang="pug">
.c-drawer(v-transfer-dom :data-transfer="true")
	.c-drawer-mask(v-show="currentVal")
	.c-drawer-wrap(v-show="currentVal" @click="close")
	transition(name="c-drawer-right")
		.c-drawer-right(v-show="currentVal")
			.c-drawer-header 
				span {{title}}
				c-svg.c-drawer-close(type="close" @click="close")
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
		width: {
			default: '33%',
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
	color: #fff;
	text-overflow: ellipsis;
	white-space: nowrap;
	span {
		margin-right: auto;
	}
}
.c-drawer-right {
	position: fixed;
	top: 60px;
	right: 0;
	z-index: 9;
	width: 33%;
	height: calc(100vh - 60px);
	background: #22242b;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
.c-drawer-right-enter-active,
.c-drawer-right-leave-active {
	transition: width 0.2s;
}
.c-drawer-right-enter,
.c-drawer-right-leave-to {
	width: 0;
}
</style>
