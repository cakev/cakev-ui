# Slider 滑块

::: demo

```html
<template>
	<div>
		<c-slider v-model="value" label="滑块" :max="50" :min="20" :step="2"></c-slider>
		<c-slider v-model="value" label="滑块" :max="50" :min="20" :step="2" type="opacity"></c-slider>
		<c-slider v-model="value" label="滑块" :max="50" :min="20" :step="2" type="brightness"></c-slider>
		<c-slider v-model="value" label="滑块" :max="50" :min="20" :step="2" type="saturate"></c-slider>
		<c-slider v-model="value" label="滑块" :max="50" :min="20" :step="2" type="hue-rotate"></c-slider>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value: 10,
			}
		},
	}
</script>
```

:::
