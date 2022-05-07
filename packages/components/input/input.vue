<template lang="pug">
c-row.c-input(:style="{width,height}" :class="{'c-input-focus':focus,'c-input-disabled':disabled}")
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
<script>
export default {
	name: 'c-input',
	props: {
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
		iconAppendClick(e) {
			this.$emit('icon-append-click', e)
		},
		handleFocus(e) {
			this.focus = true
			this.$emit('focus', e)
		},
		handleBlur(e) {
			this.focus = false
			this.$emit('blur', e)
		},
	},
}
</script>
<style lang="scss">
.c-input {
	font-size: 14px;
	background-color: #181b24;
	border: 1px solid #393b4a;
	border-radius: 2px;
	&.c-input-focus {
		border-color: #2491f7;
	}
	&:hover {
		border-color: #2491f7;
	}
	&.c-input-disabled {
		cursor: no-drop;
		border-color: #393b4a;
		input {
			color: #515a6e;
			cursor: no-drop;
		}
	}
	input {
		width: 100%;
		padding: 4px 8px;
		font-size: inherit;
		color: rgb(191, 191, 191);
		background-color: transparent;
		border: none;
		outline: none;
		box-shadow: none;
	}
	.c-input-append {
		padding: 4px 7px;
		font-size: inherit;
		line-height: 1;
		color: #515a6e;
	}
}
</style>
