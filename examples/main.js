import Vue from 'vue'
import App from './App.vue'
import CatUI from '../lib/old-seven-ui.common.js'
import router from './router'
import hljs from 'highlight.js'
import demoBlock from './components/demo-block'
import 'highlight.js/styles/atom-one-dark.css'

Vue.component('demo-block', demoBlock)
Vue.use(CatUI)
Vue.config.productionTip = false
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'old-seven-ui'
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
