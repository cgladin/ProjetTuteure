import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import UIkit from 'uikit/dist/js/uikit-core'
import Icons from 'uikit/dist/js/uikit-icons'
import '../static/css/style.css'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit
Vue.use(BootstrapVue)
