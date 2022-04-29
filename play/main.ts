import Vue from 'vue'
import App from './App.vue'
import './index.scss'
import CakeUi from '../packages'

Vue.config.productionTip = false
Vue.use(CakeUi)

new Vue({
	render: h => h(App),
}).$mount('#app')
