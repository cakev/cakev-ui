<template lang="pug">
.play-box
	h2 c-button
	c-button 按钮
	c-button(type="primary" :loading="true") 按钮
	h2 c-color
	c-color(v-model="color1")
	c-color(v-model="color2" :disabled="true")
	h2 c-input
	c-input(placeholder="请输入" v-model="input3")
	c-input(v-model="input1", @blur="input2 = false", :autofocus="true")
	c-input(width="152px", v-model="input1", append="W")
	c-input(width="152px", v-model="input1", append="W" :disabled="true")
	c-input(width="152px", v-model="input1", icon-append="checkmark")
	h2 c-label
	c-label 标签
	h2 c-svg
	c-svg(type="edit" color="#fff")
	h2 c-switch
	c-switch(v-model="switch1")
	c-switch(v-model="switch2")
	c-drawer(v-model="switch2" width='30%' title="标题")
		h2 c-drawer
		p 222
		p 111
	c-drawer(v-model="switch1" width='30%' title="标题")
		h2 c-drawer
		p 111
		p 111
		p 111
		p 111
		p 111
		p 111
	h2 c-collapse
	c-input(v-model="collapse1")
	c-collapse(title="基础属性", v-model="collapse1" type="eye" :enable="enable1" @open-click="enable1=true" @close-click="enable1=false")
		h2 c-tooltip
		c-tooltip(content="上方" placement="top")
			c-svg(type="edit" color="#fff")
		c-tooltip(content="左方" placement="left")
			c-svg(type="edit" color="#fff")
		c-tooltip(content="右方" placement="right")
			c-svg(type="edit" color="#fff")
		c-tooltip(content="下方" placement="bottom")
			c-svg(type="edit" color="#fff")
	c-collapse(title="基础属性", :value="true")
		h2 c-slider
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" :step="2")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="opacity")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="brightness")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="saturate")
		c-slider(v-model="slider" label="滑块" :max="50" :min="20" type="hue-rotate")
	h2 c-control
	c-control(label="aa" title="ddd")
		template(slot="bottom")
			h2 c-code
			c-code(v-model="code")
			c-input(v-model="code")
	c-control(label="aa" title="ddd")
		template(slot="right")
			c-input
	c-select(v-model="select")
		c-select-option(label="1111" :value="1")
		c-select-option(label="2222" :value="2")
	c-select(v-model="select")
		c-select-option(label="1111" :value="1")
		c-select-option(label="2222" :value="2")
		c-select-option(label="2222" :value="2")
		c-select-option(label="2222" :value="2")
		c-select-option(label="2222" :value="2")
		c-select-option(label="2222" :value="2")
</template>
<script lang="ts">
export default {
	name: 'play',
	data() {
		return {
			collapse1: true,
			color1: '#ffffff',
			color2: '#181b24',
			switch1: false,
			switch2: false,
			input1: '111',
			input3: '',
			input2: true,
			slider: 28,
			select: 1,
			enable1: true,
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
	h2 {
		margin: 10px 0;
		color: #fff;
	}
}
</style>
