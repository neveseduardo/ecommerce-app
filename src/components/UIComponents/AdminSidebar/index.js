import Sidebar from './SideBar.vue'
import SidebarItem from './SidebarItem.vue'

const SidebarStore = {
    showSidebar: false,
    adminLinks: [],
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
        if (options && options.adminLinks) {
            SidebarStore.adminLinks = options.adminLinks
        }
        Vue.mixin({
            data() {
                return {
                    sidebarStore: SidebarStore
                }
            }
        })

        Vue.prototype.$sidebar = SidebarStore
        Object.defineProperty(Vue.prototype, '$sidebar', {
            get() {
                return this.$root.sidebarStore
            }
        })
        Vue.component('side-bar', Sidebar)
        Vue.component('sidebar-item', SidebarItem)
    }
}

export default SidebarPlugin
