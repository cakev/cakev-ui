<template lang="pug">
.c-collapse-default
	.c-collapse-default-title(
		:class="{ active }",
		@click="active = !active")
		c-svg.c-collapse-default-title-down(:size="12" type="arrow-down")
		label {{ title }}
		.c-collapse-default-title-right
			c-tooltip(v-for="item in icon", :content="item.msg" placement="top")
				c-svg.c-collapse-default-title-icon(
					:type="item.icon",
					@click="handleIconClick(item.icon)",
					:size="14",
					@click.stop)
	.c-collapse-default-content(
		:class="{ active }",
		:style="{ height: active ? '' : '0' }")
		slot
</template>
<script>
export default {
	name: 'c-collapse-default',
	props: {
		title: {
			type: String,
		},
		icon: {
			type: Array,
			default: () => [],
		},
		show: {
			type: Boolean,
			default: false,
		},
	},
	data(props) {
		return {
			active: props.show,
		}
	},
	methods: {
		handleIconClick(value) {
			this.active = true
			this.$emit('icon-click', value)
		},
	},
}
</script>
<style lang="scss">
.c-collapse-default-title-icon {
	color: rgb(250, 250, 250);
	cursor: pointer;
}
.c-collapse-default-content {
	overflow: hidden;
	transition: all 0.3s;

	&.active {
		margin-top: 10px;
	}
}

.c-collapse-default {
	+ .c-collapse-default {
		.c-collapse-default-title {
			border-top: none;
		}
	}
}
.c-collapse-default-title-right {
	display: flex;
	flex-direction: row;
	margin-right: 10px;
	margin-left: auto;
}
.c-collapse-default-title {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 36px;
	cursor: pointer;
	background-color: #2d2f38;
	border-top: 1px solid rgb(57, 59, 74);
	border-bottom: 1px solid rgb(57, 59, 74);

	label {
		margin-left: 10px;
		font-size: 12px;
		color: rgb(250, 250, 250);
		cursor: pointer;
		user-select: none;
	}

	.c-collapse-default-title-down {
		margin-left: 10px;
		color: rgb(250, 250, 250);
		cursor: pointer;
		transition: all 0.3s;
		transform: rotate(-90deg);
	}

	&.active {
		.c-collapse-default-title-down {
			transform: rotate(0);
		}
	}
}
</style>
