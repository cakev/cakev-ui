<template lang="pug">
.play-box
	c-input(width="152px", v-model="input1", @blur="input2 = false", :autofocus="true")
	c-label 标签
	c-svg(type="edit" color="#fff")
	c-switch(v-model="switch1")
	c-drawer(v-model="switch1" width='30%' title="标题")
		p 111
		p 111
		p 111
		p 111
		p 111
		p 111
	c-collapse(title="基础属性", :show="true" type="eye" :enable="enable1" @open-click="enable1=true" @close-click="enable1=false")
		c-tooltip(content="上方" placement="top")
			c-svg(type="edit" color="#fff")
		c-tooltip(content="左方" placement="left")
			c-svg(type="edit" color="#fff")
		c-tooltip(content="右方" placement="right")
			c-svg(type="edit" color="#fff")
		c-tooltip(content="下方" placement="bottom")
			c-svg(type="edit" color="#fff")
	c-collapse(title="基础属性", :show="true")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" :step="2")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="opacity")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="brightness")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="saturate")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="hue-rotate")
	c-control(label="aa" title="ddd")
		template(slot="bottom")
			c-code(:code="code" :update:code="updateCode")
	c-control(label="aa" title="ddd")
		template(slot="right")
			c-input
</template>
<script lang="ts">
export default {
	name: 'play',
	data() {
		return {
			switch1: false,
			input1: '',
			input2: true,
			slider: 28,
			enable1: false,
			code: 'hello wolrd',
		}
	},
	methods: {
		updateCode(val) {
			console.log(val)
		},
	},
}
</script>
<style lang="scss" scoped>
.play-box {
	margin: 80px;
}
</style>
