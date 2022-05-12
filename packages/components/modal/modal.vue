<template lang="pug">
.c-modal(v-transfer-dom :data-transfer="transfer")
	.c-modal-mask(v-show="currentVal")
	transition(name="transition-scale")
		.c-modal-wrap(v-show="currentVal" @click="close")
			.c-modal-center(:style="{width:`${width}px`}" @click.stop)
				.c-modal-body
					c-row(align="start")
						c-svg(:type="icon" v-if="icon" color="#fff")
						c-column.c-model-right(align="start")
							h2 {{title}}
							p {{content}}
				c-row.c-modal-footer(:style="{justifyContent: 'end'}")
					c-button(@click.stop="handleCancel") {{cancelText}}
					c-button(type="primary" :style="{marginLeft:'10px'}" @click.stop="handleOk") {{okText}}
</template>
<script lang="ts">
import transferDom from '../../directives/transfer-dom'

export default {
	name: 'c-modal',
	directives: {
		transferDom,
	},
	props: {
		onOk: {},
		onCancel: {},
		type: {
			type: String,
			default: 'info',
		},
		transfer: {
			type: Boolean,
			default: true,
		},
		title: {
			type: String,
			default: '提示',
		},
		content: {
			type: String,
			default: '提示',
		},
		icon: {
			type: String,
			default: 'help',
		},
		okText: {
			type: String,
			default: '确定',
		},
		cancelText: {
			type: String,
			default: '取消',
		},
		value: {
			type: Boolean,
			default: false,
		},
		width: {
			type: Number,
			default: 416,
		},
		removeEle: {
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
		handleCancel(): void {
			typeof this.onCancel === 'function' && this.onCancel()
			this.close()
		},
		handleOk(): void {
			typeof this.onOk === 'function' && this.onOk()
			this.close()
		},
		close(): void {
			this.currentVal = false
			this.$emit('input', false)
			setTimeout(() => {
				if (this.removeEle) {
					this.$destroy()
					if (this.$el) document.body.removeChild(this.$el)
				}
			}, 300)
		},
	},
}
</script>
<style lang="scss" scoped>
.c-modal-body {
	margin-bottom: 20px;
}
.c-model-right {
	flex: 1;
	margin-left: 12px;
	h2 {
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: 500;
		color: #fff;
	}
	p {
		font-size: 14px;
		color: #fff;
	}
}
.c-modal {
	position: relative;
	z-index: 9999;
}
.c-modal-mask {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.c-modal-wrap {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: auto;
}
.c-modal-center {
	padding: 22px 32px 24px 32px;
	background: #2d2f38;
	border-radius: 4px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
