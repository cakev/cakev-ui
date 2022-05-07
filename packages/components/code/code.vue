<template lang="pug">
editor(
	v-model="currentVal",
	@init="editorInit",
	:lang="lang",
	:theme="theme",
	height="200")
</template>
<script>
const editor = require('vue2-ace-editor')

export default {
	name: 'c-code',
	components: {
		editor,
	},
	props: {
		label: {
			type: String,
			default: '代码',
		},
		lang: {
			type: String,
			default: 'javascript',
		},
		theme: {
			type: String,
			default: 'idle_fingers',
		},
		show: {
			type: Boolean,
			default: true,
		},
		value: {
			type: String,
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
		currentVal(val) {
			this.$emit('input', val)
		},
	},
	methods: {
		editorInit() {
			require('brace/ext/language_tools')
			require('brace/mode/html')
			require('brace/mode/javascript')
			require('brace/mode/less')
			require('brace/mode/json')
			require('brace/theme/idle_fingers')
			require('brace/snippets/javascript')
		},
	},
}
</script>
<style lang="scss">
.ace_scrollbar-v {
	&::-webkit-scrollbar {
		width: 4px;
		height: 1px;
		transition: all 0.3s;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(83, 83, 83, 1);
		border-radius: 10px;
		transition: all 0.3s;
	}

	&::-webkit-scrollbar-track {
		background: rgba(237, 237, 237, 1);
		border-radius: 10px;
		transition: all 0.3s;
	}
}

.ace-idle-fingers {
	background-color: rgb(24, 27, 36) !important;
	border: 1px solid #393b4a;

	.ace_gutter {
		background-color: rgb(24, 27, 36) !important;
		border-right: 1px solid #393b4a;
	}

	.ace_gutter-active-line {
		background-color: rgb(24, 27, 36) !important;
	}

	.ace_cursor {
		color: #999 !important;
	}

	.ace_marker-layer {
		.ace_active-line {
			background-color: rgb(24, 27, 36) !important;
		}
	}

	.ace_string {
		color: rgb(18, 120, 246) !important;
	}

	.ace_variable {
		color: #a2adce;
	}

	.ace_numeric {
		color: #4cbd66 !important;
	}
}
</style>
