import type { VueConstructor } from 'vue'
import CInput from './components/input'
import CLabel from './components/label'
import CSvg from './components/svg'
import CColumn from './components/column'
import CRow from './components/row'
import CSwitch from './components/switch'
import CDrawer from './components/drawer'
import CTooltip from './components/tooltip'
import CSlider from './components/slider'
import CCollapse from './components/collapse'
import CControl from './components/control'
import CCode from './components/code'
import './style/index.scss'

const components = [
	CInput,
	CLabel,
	CSvg,
	CColumn,
	CRow,
	CSwitch,
	CDrawer,
	CTooltip,
	CSlider,
	CCollapse,
	CControl,
	CCode,
]

const install = (Vue: VueConstructor): void => {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	const req = require.context('./svg', false, /\.svg$/)
	req.keys().map(req)
}

const version = process.env.version
const ui = {
	version,
	install,
	...components,
}

export {
	version,
	install,
	CInput,
	CLabel,
	CSvg,
	CColumn,
	CRow,
	CSwitch,
	CDrawer,
	CTooltip,
	CSlider,
	CCollapse,
	CControl,
	CCode,
}
export default ui
