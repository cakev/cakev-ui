<template lang="pug">
CCollapseDefault(v-if="type==='default'" v-bind="{...$props,...$attrs}",v-on="$listeners")
	slot
CCollapseEye(v-else-if="type==='eye'" v-bind="{...$props,...$attrs}",v-on="$listeners")
	slot
CCollapseList(v-else v-bind="{...$props,...$attrs}",v-on="$listeners")
	slot
</template>
<script>
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
