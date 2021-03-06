import Vue, { Component } from 'vue'
import CModal from './modal.vue'

const newInstance = (type, properties) => {
	const Instance = new Vue({
		render(createElement) {
			return createElement(CModal as Component, {
				props: { ...properties, type, removeEle: true, transfer: false },
			})
		},
	})
	const component = Instance.$mount()
	const modal = Instance.$children[0]
	document.body.appendChild(component.$el)
	// @ts-ignore
	modal.currentVal = true
}

CModal['confirm'] = properties => {
	newInstance('confirm', properties)
}

CModal['info'] = function (properties) {
	newInstance('info', properties)
}

CModal['success'] = function (properties) {
	newInstance('success', properties)
}

CModal['error'] = function (properties) {
	newInstance('error', properties)
}

export default CModal
