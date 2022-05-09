# Select 选择器

::: demo

```html
<template>
	<c-select v-model="value">
		<c-select-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
		></c-select-option>
	</c-select>
</template>
<script>
	export default {
		data() {
			return {
				options: [
					{
						value: '选项1',
						label: '黄金糕',
					},
					{
						value: '选项2',
						label: '双皮奶',
					},
				],
				value: '',
			}
		},
	}
</script>
```

:::
