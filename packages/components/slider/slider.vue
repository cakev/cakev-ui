<template lang="pug">
c-row
	c-label {{label}}
	c-row.c-slider
		.c-slider-content(ref="slider")
			.c-slider-wrap(:class="`c-slider-wrap-${type}`")
				.c-slider-wrap-bar(:style="{width:position}")
				c-tooltip.c-slider-wrap-button-box(
					:class="{'c-slider-wrap-button-box-dragging':dragging}"
					placement="top" 
					:style="{left:position}" 
					:content="currentVal"  
					@touchstart="onPointerDown($event)"
					@mousedown="onPointerDown($event)")
					.c-slider-wrap-button
		c-input(v-model="currentVal" width="62px", height="26px")
</template>
<script>
import { on, off } from '../../utils'

export default {
	name: 'c-slider',
	props: {
		min: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: 100,
		},
		step: {
			type: Number,
			default: 1,
		},
		value: {},
		type: {
			type: String,
			default: 'default',
		},
		label: {
			type: String,
		},
	},
	data(props) {
		return {
			currentVal: this.getCurrentValue(props.value),
			sliderWidth: 0,
			startX: 0,
			currentX: 0,
			startPos: 0,
			dragging: false,
		}
	},
	computed: {
		position() {
			return `${((this.currentVal - this.min) / this.valueRange) * 100}%`
		},
		valueRange() {
			return this.max - this.min
		},
	},
	watch: {
		value(val) {
			this.currentVal = this.getCurrentValue(val)
		},
		currentVal(val) {
			this.$emit('input', val)
		},
	},
	methods: {
		getCurrentValue(val) {
			let currentVal
			if (val > this.max) {
				currentVal = this.max
			} else if (val < this.min || isNaN(val)) {
				currentVal = this.min
			} else {
				currentVal = val
			}
			return currentVal
		},
		getPointerX(e) {
			return e.type.indexOf('touch') !== -1 ? e.touches[0].clientX : e.clientX
		},
		onPointerDown(event) {
			event.preventDefault()
			this.onPointerDragStart(event)
			on(window, 'mousemove', this.onPointerDrag)
			on(window, 'touchmove', this.onPointerDrag)
			on(window, 'mouseup', this.onPointerDragEnd)
			on(window, 'touchend', this.onPointerDragEnd)
		},
		onPointerDragStart(event) {
			this.dragging = true
			this.startX = this.getPointerX(event)
		},
		onPointerDrag(event) {
			this.currentX = this.getPointerX(event)
			const offsetWidth = this.$refs.slider.offsetWidth
			const diff = this.currentX - this.startX
			const valueStep = (offsetWidth / this.valueRange) * this.step
			if (Math.abs(diff) >= valueStep) {
				const valueDiff = Math.round(diff / valueStep)
				this.currentVal += valueDiff * this.step
				this.startX = this.getPointerX(event)
			}
		},
		onPointerDragEnd() {
			if (this.dragging) {
				this.dragging = false
			}
			off(window, 'mousemove', this.onPointerDrag)
			off(window, 'touchmove', this.onPointerDrag)
			off(window, 'mouseup', this.onPointerDragEnd)
			off(window, 'touchend', this.onPointerDragEnd)
		},
	},
}
</script>
<style lang="scss" scoped>
.c-slider {
	flex: 1;
}
.c-slider-content {
	flex: 1;
	margin-right: 10px;
}
.c-slider-wrap-button-box {
	position: absolute;
	top: -2px;
	z-index: 9;
	transform: translateX(-50%);
	&.c-slider-wrap-button-box-dragging {
		.c-slider-wrap-button {
			box-shadow: 0 0 0 5px rgba(36, 145, 247, 0.5);
			transform: scale(1.5);
		}
	}
}
.c-slider-wrap-bar {
	height: 4px;
}
.c-slider-wrap-button {
	width: 8px;
	height: 8px;
	text-align: center;
	background-color: #2491f7;
	border: 2px solid #fff;
	border-radius: 8px;
	transition: all 0.2s linear;
}
.c-slider-wrap {
	position: relative;
	width: 100%;
	height: 4px;
	margin: 16px 0;
	vertical-align: middle;
	cursor: pointer;
	background-color: #393b4a;
	border-radius: 3px;
	&.c-slider-wrap-hue-rotate {
		background-image: linear-gradient(-90deg, #f00, #f0f, #00f, #0ff, #0f0, #ff0, #f00);
	}
	&.c-slider-wrap-saturate {
		background-image: linear-gradient(90deg, #6d6d6d, #f00);
	}
	&.c-slider-wrap-brightness {
		background-image: linear-gradient(90deg, #000, #fff);
	}
	&.c-slider-wrap-opacity {
		background-color: #818181;
		background-image: linear-gradient(45deg, #969696 25%, transparent 0, transparent 75%, #969696 0),
			linear-gradient(45deg, #969696 25%, transparent 0, transparent 75%, #969696 0);
		background-position: 0 0, 3px 3px;
		background-size: 6px 6px;
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			content: '';
			background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), #000);
		}
	}
	&.c-slider-wrap-default {
		.c-slider-wrap-bar {
			background: #2491f7;
		}
	}
}
</style>
