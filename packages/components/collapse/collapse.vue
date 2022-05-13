<template lang="pug">
CCollapseDefault(v-if="type==='default'" v-bind="{...$props,...$attrs}", v-on="$listeners")
	slot
CCollapseEye(v-else-if="type==='eye'" v-bind="{...$props,...$attrs}", v-on="$listeners")
	slot
CCollapseList(v-else v-bind="{...$props,...$attrs}", v-on="$listeners")
	slot
</template>
<script lang="ts">
import CCollapseDefault from './default.vue'
import CCollapseEye from './eye.vue'
import CCollapseList from './list.vue'

export default {
	name: 'c-collapse',
	components: {
		CCollapseDefault,
		CCollapseEye,
		CCollapseList,
	},
	props: {
		type: {
			type: String,
			default: 'default',
		},
	},
}
</script>
<style lang="scss">
.c-collapse {
	+ .c-collapse {
		.c-collapse-title {
			border-top: none;
		}
	}
	&:last-child {
		.c-collapse-title {
			border-bottom: none;
		}
	}
}
.c-collapse-title-icon {
	color: var(--panelFontColor);
	cursor: pointer;
}
.c-collapse-content {
	overflow: hidden;

	&.active {
		padding: 10px;
	}
}
.c-collapse-title-right {
	display: flex;
	flex-direction: row;
	margin-right: 10px;
	margin-left: auto;
}
.c-collapse-title {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 36px;
	line-height: 36px;
	cursor: pointer;
	background-color: var(--middleBgColor);

	label {
		margin-left: 10px;
		font-size: 12px;
		line-height: 36px;
		color: var(--panelFontColor);
		cursor: pointer;
		user-select: none;
	}

	.c-collapse-title-down {
		margin-left: 10px;
		color: var(--panelFontColor);
		cursor: pointer;
		transition: all 0.3s;
		transform: rotate(-90deg);
	}

	&.active {
		.c-collapse-title-down {
			transform: rotate(0);
		}
	}
}
</style>
