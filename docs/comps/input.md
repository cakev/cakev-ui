# Input 输入框

::: demo

```html
<template>
	<div>
		<c-input v-model="value" />
		<c-input v-model="value" append="px" />
		<c-input v-model="value" iconAppend="checkmark" />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value: '',
			}
		},
	}
</script>
```

:::
