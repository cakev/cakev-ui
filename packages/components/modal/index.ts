import Vue, { Component } from 'vue'
import CModal from './modal.vue'

CModal['confirm'] = function (properties) {
	const ok = properties.onOk
	const onCancel = properties.onCancel
	properties.onOk = () => {
		typeof ok === 'function' && ok()
		this.remove()
	}
	properties.onCancel = () => {
		typeof onCancel === 'function' && onCancel()
		this.remove()
	}
	const Instance = new Vue({
		render(createElement) {
			return createElement(CModal as Component, {
				props: properties,
			})
		},
	})
	const component = Instance.$mount()
	document.body.appendChild(component.$el)
	const modal = Instance.$children[0]
	// @ts-ignore
	modal.currentVal = true
	this.remove = () => {
		component.$destroy()
		component.$el.remove()
	}
}

export default CModal
