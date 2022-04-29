import type { VueConstructor } from 'vue'
import CInput from './components/input'
import CLabel from './components/label'
import CSvg from './components/svg'
import CColumn from './components/column'
import CRow from './components/row'

const components = [CInput, CLabel, CSvg, CColumn, CRow]

const install = (Vue: VueConstructor): void => {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	const req = require.context('./svg', false, /\.svg$/)
	req.keys().map(req)
}

export default {
	version: process.env.version,
	install,
	CInput,
	CLabel,
	CSvg,
	CColumn,
	CRow,
}
