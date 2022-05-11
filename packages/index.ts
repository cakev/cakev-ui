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
import CSelect from './components/select'
import CSelectOption from './components/select-option'
import CBadge from './components/badge'
import CColor from './components/color'
import CButton from './components/button'
import CLoading from './components/loading'

import clickOutside from './directives/click-outside'
import transferDom from './directives/transfer-dom'
import './style/index.scss'

const directives = [clickOutside, transferDom]

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
	CSelect,
	CSelectOption,
	CBadge,
	CColor,
	CButton,
	CLoading,
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
	...directives,
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
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
	CSelect,
	CSelectOption,
	CBadge,
	CColor,
	CButton,
	CLoading,
	clickOutside,
	transferDom,
}
export default ui
