<template lang="pug">
.c-notice
	transition(name="transition-slideRight")
		.c-notice-body(v-show="currentVal")
			c-row(align="start")
				c-svg(:type="icon" v-if="icon" color="#fff")
				c-column.c-notice-right(align="start")
					h2 {{title}}
					p {{content}}
			c-svg.c-notice-close(type="close" @click="close" color="#fff" :size="14")
</template>
<script lang="ts">
export default {
	name: 'c-notice',
	props: {
		onClose: {},
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
		value: {
			type: Boolean,
			default: false,
		},
		duration: {
			type: Number,
			default: 3000,
		},
	},
	data(props) {
		return {
			currentVal: props.value,
			timer: null,
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
	mounted() {
		if (this.duration > 0) {
			this.timer = setTimeout(() => {
				this.close()
			}, this.duration)
		}
	},
	methods: {
		close(): void {
			this.currentVal = false
			this.$emit('input', false)
			typeof this.onClose === 'function' && this.onClose()
			setTimeout(() => {
				this.$destroy()
				if (this.$el) document.body.removeChild(this.$el)
			}, 300)
			clearTimeout(this.timer)
		},
	},
}
</script>
<style lang="scss" scoped>
.c-notice-close {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
}
.c-notice-right {
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
.c-notice {
	position: relative;
	z-index: 9999;
}
.c-notice-body {
	position: fixed;
	top: 24px;
	right: 0;
	width: 335px;
	padding: 22px 32px 24px 32px;
	margin-right: 24px;
	background: #2d2f38;
	border-radius: 4px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
