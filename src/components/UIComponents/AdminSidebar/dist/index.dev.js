"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SideBar = _interopRequireDefault(require("./SideBar.vue"));

var _SidebarItem = _interopRequireDefault(require("./SidebarItem.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  isMinimized: false,
  displaySidebar: function displaySidebar(value) {
    this.showSidebar = value;
  },
  toggleMinimize: function toggleMinimize() {
    document.body.classList.toggle('sidebar-mini'); // we simulate the window Resize so the charts will get updated in realtime.

    var simulateWindowResize = setInterval(function () {
      window.dispatchEvent(new Event('resize'));
    }, 180); // we stop the simulation of Window Resize after the animations are completed

    setTimeout(function () {
      clearInterval(simulateWindowResize);
    }, 1000);
    this.isMinimized = !this.isMinimized;
  }
};
var SidebarPlugin = {
  install: function install(Vue, options) {
    if (options && options.sidebarLinks) {
      SidebarStore.sidebarLinks = options.sidebarLinks;
    }

    Vue.mixin({
      data: function data() {
        return {
          sidebarStore: SidebarStore
        };
      }
    });
    Vue.prototype.$sidebar = SidebarStore;
    Object.defineProperty(Vue.prototype, '$sidebar', {
      get: function get() {
        return this.$root.sidebarStore;
      }
    });
    Vue.component('side-bar', _SideBar["default"]);
    Vue.component('sidebar-item', _SidebarItem["default"]);
  }
};
var _default = SidebarPlugin;
exports["default"] = _default;