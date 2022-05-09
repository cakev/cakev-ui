import Vue from 'vue'
import App from './App.vue'
import './index.scss'
import CakeUi from '../packages'

// import '../dist/ui.css'
// import CakeUi from '../dist/ui.umd.min'

Vue.config.productionTip = false
Vue.use(CakeUi)

new Vue({
	render: h => h(App),
}).$mount('#app')
