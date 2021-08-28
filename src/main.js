import Vue from 'vue'
import App from './views/App.vue'
import store from '@/store/'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt-br'
import VueTheMask from 'vue-the-mask'
import money from 'v-money'

// fontwesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// sidebar plugin
import SideBar from "@/components/UIComponents/UserSidebar";
import sidebarLinks from "@/userLinks";
import AdminSidebar from "@/components/UIComponents/AdminSidebar";
import adminSidebarLinks from "@/adminLinks";

import initProgress from '@/progressbar'
import routes from '@/routes'
import './assets/scss/app.scss'
import 'element-ui/lib/theme-chalk/index.css'
import { methods } from '@/utils/methods'


Vue.mixin({ methods: methods })
Vue.use(VueRouter)
Vue.use(SideBar, { sidebarLinks: sidebarLinks });
Vue.use(AdminSidebar, { adminSidebarLinks: adminSidebarLinks });
Vue.use(ElementUI, { locale })
Vue.use(VueTheMask)
Vue.use(money, { precision: 4 })
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active',
    scrollBehavior: (to) => {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }
})
initProgress(router);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
