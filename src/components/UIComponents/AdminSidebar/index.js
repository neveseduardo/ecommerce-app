import Sidebar from './SideBar.vue'
import SidebarItem from './SidebarItem.vue'

const AdminSidebarStore = {
    showSidebar: false,
    adminSidebarLinks: [],
    isMinimized: false,
    displaySidebar(value) {
        this.showSidebar = value
    },
    toggleMinimize() {
        document.body.classList.toggle('sidebar-mini')
        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(() => {
            window.dispatchEvent(new Event('resize'))
        }, 180)

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(() => {
            clearInterval(simulateWindowResize)
        }, 1000)

        this.isMinimized = !this.isMinimized
    }
}

const SidebarPlugin = {

    install(Vue, options) {
        if (options && options.adminSidebarLinks) {
            AdminSidebarStore.adminSidebarLinks = options.adminSidebarLinks
        }
        Vue.mixin({
            data() {
                return {
                    AdminsidebarStore: AdminSidebarStore
                }
            }
        })

        Vue.prototype.$adminSidebar = AdminSidebarStore
        Object.defineProperty(Vue.prototype, '$adminSidebar', {
            get() {
                return this.$root.AdminsidebarStore
            }
        })
        Vue.component('admin-side-bar', Sidebar)
        Vue.component('admin-sidebar-item', SidebarItem)
    }
}

export default SidebarPlugin
