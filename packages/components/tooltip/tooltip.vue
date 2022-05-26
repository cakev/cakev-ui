<template lang="pug">
.c-tooltip(
	@mouseenter="handleShowPopper",
	@mouseleave="handleClosePopper",
	v-on="$listeners",
	:class="{ 'c-tooltip-hover': visible }"
)
	.c-tooltip-body
		slot
	transition(name="transition-fade")
		.c-tooltip-content(v-show="visible", :class="`c-tooltip-content-${placement}`")
			.c-tooltip-arrow(:class="`c-tooltip-arrow-${placement}`")
			.c-tooltip-inner {{ content }}
</template>
<script lang="ts">
export default {
	name: 'c-tooltip',
	props: {
		placement: {
			type: String,
			default: 'bottom',
		},
		content: {
			type: [String, Number],
			default: '',
		},
	},
	data() {
		return {
			visible: false,
		}
	},
	methods: {
		handleShowPopper() {
			this.visible = true
		},
		handleClosePopper() {
			this.visible = false
		},
	},
}
</script>
<style lang="scss">
.c-tooltip {
	position: relative;
	display: inline-block;
	cursor: pointer;
	&.c-tooltip-hover {
		z-index: 9999;
	}
}
.c-tooltip-body {
	display: flex;
	align-items: center;
}
.c-tooltip-content {
	position: absolute;
	font-size: 14px;
	line-height: 1.5;
	&.c-tooltip-content-top {
		top: 0;
		left: 50%;
		padding: 5px 0 8px 0;
		transform: translateY(-100%) translateX(-50%);
	}
	&.c-tooltip-content-left {
		top: 50%;
		left: 0;
		padding: 0 8px 0 5px;
		transform: translateY(-50%) translateX(-100%);
	}
	&.c-tooltip-content-bottom {
		bottom: 0;
		left: 50%;
		padding: 5px 0 8px 0;
		transform: translateY(100%) translateX(-50%);
	}
	&.c-tooltip-content-right {
		top: 50%;
		right: 0;
		padding: 0 8px 0 5px;
		transform: translateY(-50%) translateX(100%);
	}
}
.c-tooltip-arrow {
	position: absolute;
	width: 0;
	height: 0;
	border-color: transparent;
	border-style: solid;
	&.c-tooltip-arrow-left {
		top: 50%;
		right: 3px;
		margin-top: -5px;
		border-width: 5px 0 5px 5px;
		border-left-color: var(--contentBgColor);
	}
	&.c-tooltip-arrow-top {
		bottom: 3px;
		left: 50%;
		margin-left: -5px;
		border-width: 5px 5px 0;
		border-top-color: var(--contentBgColor);
	}
	&.c-tooltip-arrow-right {
		top: 50%;
		left: 0;
		margin-top: -5px;
		border-width: 5px 5px 5px 0;
		border-right-color: var(--contentBgColor);
	}
	&.c-tooltip-arrow-bottom {
		top: 0;
		left: 50%;
		margin-left: -5px;
		border-width: 0 5px 5px 5px;
		border-bottom-color: var(--contentBgColor);
	}
}
.c-tooltip-inner {
	max-width: 250px;
	min-height: 34px;
	padding: 8px 12px;
	color: var(--panelFontColor);
	text-align: left;
	text-decoration: none;
	white-space: nowrap;
	background-color: var(--contentBgColor);
	border-radius: 4px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
