<template>
    <main class="home-main">
        <header-navbar />
        <home-content />
        <home-footer />
    </main>
</template>

<script>
import HomeContent from '@/components/layouts/HomeLayout/Content'
import HeaderNavbar from '@/components/layouts/HomeLayout/HeaderNavbar'
import HomeFooter from '@/components/layouts/HomeLayout/Footer'

export default {
    name: 'HomeLayout',
    components: {
        HomeContent,
        HeaderNavbar,
        HomeFooter,
    },
}
</script>