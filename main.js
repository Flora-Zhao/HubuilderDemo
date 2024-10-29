import App from './App'
import i18n from './i18n';
import store from './store';
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uvUI from '@climblee/uv-ui'
Vue.config.productionTip = false
Vue.use(uvUI);
App.mpType = 'app'
const app = new Vue({
	...App
})
app.use(uvUI);
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	const language = uni.getStorageSync('language') || 'en';
	    i18n.global.locale = language;
  app.use(i18n);
  app.use(store);
	return {
		app
	}
}
// #endif