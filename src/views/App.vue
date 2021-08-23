<template>
    <div :class="{ 'nav-open': $sidebar.showSidebar || $adminSidebar.showSidebar }">
        <router-view name="header"></router-view>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
export default {}
</script>