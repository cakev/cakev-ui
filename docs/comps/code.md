# Code 代码块

::: demo

```html
<template>
	<div>
		<c-code v-model="value1"></c-code>
		<c-code v-model="value2" lang="javascript"></c-code>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value1: '{ "value" : "hello world" }',
				value2: 'console.log("hello world")',
			}
		},
	}
</script>
```

:::
