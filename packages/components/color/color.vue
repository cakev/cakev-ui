<template lang="pug">
c-row.c-color(ref="colorPicker" v-click-outside="hidePanel" :class="{'c-color-focus':focus}")
	c-row.c-color-btn-box(:class="{'c-color-panel-disabled':disabled}")
		.c-color-btn(:style="{'background-color':currentValue}" @click="taggerPanel")
		.c-color-panel
			sketch(:value="currentValue" @input="updateValue")
		c-svg(type="arrow-down" :color="disabled?'#515a6e':'#fff'" :size="12")
	c-input(:value="currentValue" :disabled="true")
</template>
<script lang="ts">
// @ts-ignore
import { Sketch } from 'vue-color'
import clickOutside from '../../directives/click-outside'
import transferDom from '../../directives/transfer-dom'

export default {
	name: 'c-color',
	directives: { clickOutside, transferDom },
	components: {
		Sketch,
	},
	props: {
		value: {},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data(props) {
		return {
			focus: false,
			currentValue: props.value,
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
	methods: {
		hidePanel() {
			this.focus = false
		},
		updateValue(val) {
			this.currentValue = `rgba(${val['rgba']['r']},${val['rgba']['g']},${val['rgba']['b']},${val['rgba']['a']})`
		},
		taggerPanel() {
			if (this.disabled) return
			this.focus = !this.focus
		},
	},
}
</script>
<style lang="scss">
.c-color-btn-box {
	height: 28px;
	padding: 8px;
	margin-right: 10px;
	background-color: #181b24;
	border: 1px solid #393b4a;
	border-radius: 4px;
	&.c-color-panel-disabled {
		.c-color-btn {
			cursor: no-drop;
		}
	}
}
.c-color-btn {
	width: 12px;
	height: 12px;
	margin-right: 10px;
	cursor: pointer;
	border: 1px solid #393b4a;
}
.c-color-panel {
	position: absolute;
	top: 28px;
	width: 212px;
	visibility: hidden;
	opacity: 0;
	transition: all 0.3s ease;
}
.c-color {
	position: relative;
	&.c-color-focus {
		z-index: 9999;
		.c-color-panel {
			visibility: visible;
			opacity: 1;
		}
	}
}
</style>
