import Vue, { Component } from 'vue'
import CNotice from './notice.vue'

const newInstance = (type, properties) => {
	const Instance = new Vue({
		render(createElement) {
			return createElement(CNotice as Component, {
				props: { ...properties, type },
			})
		},
	})
	const component = Instance.$mount()
	const modal = Instance.$children[0]
	document.body.appendChild(component.$el)
	// @ts-ignore
	modal.currentVal = true
}

CNotice['info'] = function (properties) {
	newInstance('info', properties)
}

CNotice['success'] = function (properties) {
	newInstance('success', properties)
}

CNotice['error'] = function (properties) {
	newInstance('error', properties)
}

export default CNotice
