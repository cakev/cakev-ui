<template lang="pug">
c-row.c-input(:style="{width,height}" :class="{'c-input-focus':focus,'c-input-disabled':disabled}")
	.c-input-content
		.c-input-placeholder(v-if="!currentVal") {{placeholder}}
		input(
			:autofocus="autofocus",
			:disabled="disabled",
			:value="currentVal",
			:style="{ display }",
			@focus="handleFocus",
			@blur="handleBlur",
			@change="$emit('change', $event)",
			@input="$emit('input', $event.target.value)")
	.c-input-append(v-if="append") {{append}}
	.c-input-append(v-if="iconAppend")
		c-svg(:type="iconAppend" :size="14" @click="iconAppendClick")
</template>
<script lang="ts">
export default {
	name: 'c-input',
	props: {
		placeholder: {
			type: String,
			default: '',
		},
		iconAppend: {
			type: String,
			default: '',
		},
		autofocus: {
			type: Boolean,
			default: false,
		},
		width: {
			type: String,
			default: '100%',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		height: {
			type: String,
			default: '',
		},
		display: {
			default: 'block',
		},
		append: {},
		value: {},
	},
	data(props) {
		return {
			currentVal: props.value,
			focus: false,
		}
	},
	watch: {
		value(val) {
			this.currentVal = val
		},
	},
	methods: {
		iconAppendClick(e): void {
			this.$emit('icon-append-click', e)
		},
		handleFocus(e): void {
			this.focus = true
			this.$emit('focus', e)
		},
		handleBlur(e): void {
			this.focus = false
			this.$emit('blur', e)
		},
	},
}
</script>
<style lang="scss">
.c-input-content {
	position: relative;
	width: 100%;
}
.c-input-placeholder {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 4px 8px;
	color: var(--panelDisabeldFontColor);
	text-align: left;
	pointer-events: none;
}
.c-input {
	height: 28px;
	font-size: var(--panelFontSize);
	color: var(--panelFontColor);
	background-color: var(--panelBgColor);
	border: 1px solid var(--contentBorderColor);
	border-radius: var(--panelBorderRadius);
	&.c-input-focus {
		border-color: var(--themeColor);
		box-shadow: var(--themeBoxshowColor);
	}
	&.c-input-disabled {
		color: var(--panelDisabeldFontColor);
		cursor: no-drop;
		input {
			color: var(--panelDisabeldFontColor);
			cursor: no-drop;
		}
	}
	input {
		width: 100%;
		height: 28px;
		padding: 4px 8px;
		font-size: inherit;
		color: var(--panelFontColor);
		background-color: transparent;
		border: none;
		outline: none;
		box-shadow: none;
	}
	.c-input-append {
		padding: 4px 7px;
		font-size: inherit;
		line-height: 1;
		color: var(--panelDisabeldFontColor);
	}
}
</style>
