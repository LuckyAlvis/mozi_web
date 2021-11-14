import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 全局配置axios
import axios from 'axios'
// 导入高德地图
// import VueAMap from 'vue-amap'
//
// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//   key: '4fbfc2d1afcb4d3408ebfd98847a0e17',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   // 默认高德 sdk 版本为 1.4.4
//   uiVersion: '1.0', // ui库版本，不配置不加载
//   v: '1.4.4'
// })

axios.defaults.baseURL = 'http://localhost:8808/api/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
