<template lang="pug">
.c-collapse-eye
	.c-collapse-eye-title(
		:class="{ active, enable: !syncedEnable }",
		@click="handleClick")
		c-svg.c-collapse-eye-title-down(:size="12" type="arrow-down")
		label {{ title }}
		.c-collapse-eye-title-right
			c-tooltip(v-for="item in icon", :content="item.msg" placement="top")
				c-svg.c-collapse-default-title-icon(
					:type="item.icon",
					@click="e => handleIconClick(e, item.icon)",
					:size="14",
					@click.stop)
	.c-collapse-eye-content(
		:class="{ active }",
		:style="{ height: active ? '' : '0' }")
		slot(v-if="enable")
</template>
<script>
export default {
	name: 'c-collapse-eye',
	props: {
		title: {
			type: String,
		},
		enable: {
			type: Boolean,
		},
		show: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			active: this.show,
		}
	},
	computed: {
		icon() {
			if (this.syncedEnable) {
				return [
					{
						icon: 'eye-off',
						msg: '关闭',
					},
				]
			}
			return [
				{
					icon: 'eye',
					msg: '开启',
				},
			]
		},
		syncedEnable: {
			get() {
				return this.enable
			},
			set(value) {
				this.$emit('update:enable', value)
			},
		},
	},
	methods: {
		handleClick() {
			if (this.syncedEnable) {
				this.active = !this.active
			}
		},

		handleIconClick(e, value) {
			e.preventDefault()
			e.stopPropagation()
			if (value === 'eye') {
				this.active = true
				this.$emit('open-click', !this.syncedEnable)
			}
			if (value === 'eye-off') {
				this.active = false
				this.$emit('close-click', !this.syncedEnable)
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.c-collapse-default-title-icon {
	color: rgb(250, 250, 250);
	cursor: pointer;
}
.c-collapse-eye-content {
	overflow: hidden;
	transition: all 0.3s;

	&.active {
		margin-top: 10px;
	}
}

.c-collapse-eye {
	+ .c-collapse-eye {
		.c-collapse-eye-title {
			border-top: none;
		}
	}
}
.c-collapse-eye-title-right {
	display: flex;
	flex-direction: row;
	margin-right: 10px;
	margin-left: auto;
}
.c-collapse-eye-title {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 36px;
	line-height: 36px;
	cursor: pointer;
	background-color: #2d2f38;
	border-top: 1px solid rgb(57, 59, 74);
	border-bottom: 1px solid rgb(57, 59, 74);

	label {
		margin-left: 10px;
		font-size: 12px;
		line-height: 36px;
		color: rgb(250, 250, 250);
		cursor: pointer;
		user-select: none;
	}

	.c-collapse-eye-title-down {
		width: 12px;
		height: 12px;
		margin-left: 10px;
		color: rgb(250, 250, 250);
		cursor: pointer;
		transition: all 0.3s;
		transform: rotate(-90deg);
	}

	&.enable {
		label,
		.c-collapse-eye-title-down {
			color: rgb(102, 102, 102);
		}
	}

	&.active {
		.c-collapse-eye-title-down {
			transform: rotate(0);
		}
	}
}
</style>
