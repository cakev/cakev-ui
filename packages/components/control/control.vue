<template lang="pug">
c-column(align="start")
	c-row.c-control
		c-row.label
			span(style="margin-right: 5px") {{ label }}
			c-tooltip(:content="title", placement="top", v-if="title")
				c-svg.pos-r.pointer(:type="icon", :size="16", :style="{ top: '3px' }")
		c-row.c-control-right
			slot(name="right")
	.c-control-bottom
		slot(name="bottom")
</template>
<script>
export default {
	name: 'c-control',
	props: {
		label: {
			type: String,
		},
		title: {
			type: String,
		},
		icon: {
			type: String,
			default: 'help',
		},
	},
}
</script>
<style lang="scss">
.c-control-bottom {
	width: 100%;
}
.c-control {
	width: 100%;
	min-height: 32px;

	.c-control-right {
		flex: 1;
		flex-wrap: wrap;
		justify-content: flex-end;
		min-height: 32px;
	}

	.label {
		width: 105px;
		font-size: 12px;
		line-height: 32px;
		color: #fafafa;
	}
}
</style>
