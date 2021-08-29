<template>
    <header class="header">
        <h1>
            <a @click="toggleSidebar"><i class="fa fa-bars"></i></a
            ><a>{{ appName }}</a>
        </h1>

        <form action="">
            <el-input
                placeholder="Pesquisar..."
                v-model="search"
                class="input-with-select"
            >
                <el-select
                    clearable
                    multiple
                    collapse-tags
                    v-model="category"
                    slot="prepend"
                    placeholder="Categorias"
                >
                    <el-option
                        v-for="(item, index) in categories"
                        :key="index"
                        :label="item.title"
                        :value="index"
                    ></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </form>

        <ul class="list-itens">
            <li>
                <a><i class="fa fa-heart"></i><span>1</span></a>
            </li>
            <li>
                <a><i class="fa fa-shopping-bag"></i></a>
            </li>
            <li>
                <a><i class="fa fa-user"></i><span>99</span></a>
            </li>
        </ul>

        <nav v-on-clickaway="away" :class="showSidebar ? 'sidebar show' : 'sidebar'">
            <h1>
                <a @click="toggleSidebar">{{ appName }}</a>
                <a @click="toggleSidebar"><i class="fa fa-times"></i></a>
            </h1>

            <form action="">
                <el-input
                    placeholder="Pesquisar..."
                    suffix-icon="el-icon-search"
                    v-model="search"
                />
            </form>

            <el-tabs v-model="activeName">
                <el-tab-pane label="MENU" name="first">
                    <ul class="menu">
                        <li v-for="(item, index) in menuOptions" :key="index">
                            <a><i :class="item.class"></i>{{ item.title }}</a>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="CATEGORIAS" name="second">
                    <ul class="categories">
                        <li v-for="(item, index) in categories" :key="index">
                            <a><i :class="item.class"></i>{{ item.title }}</a>
                        </li>
                    </ul></el-tab-pane
                >
            </el-tabs>
        </nav>
    </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
    name: 'HeaderNavbar',
    mixins: [clickaway],
    data() {
        return {
			appName: process.env.VUE_APP_NAME,
            showSidebar: false,
            search: '',
            category: '',
            activeName: 'first',
            categories: [
                { title: 'Electronic', class: 'fa fa-cogs' },
                { title: 'Cellphones', class: 'fa fa-cogs' },
                { title: 'Videogames', class: 'fa fa-cogs' },
                { title: 'Home, Garden & Kitchen', class: 'fa fa-cogs' },
                { title: 'Health & Beauty', class: 'fa fa-cogs' },
                { title: 'Yewelry & Watches', class: 'fa fa-cogs' },
                { title: 'Computer & Technology', class: 'fa fa-cogs' },
                { title: 'Babies & Moms', class: 'fa fa-cogs' },
                { title: 'Phones & Accessories', class: 'fa fa-cogs' },
                { title: 'Books & Office', class: 'fa fa-cogs' },
                { title: 'Cars & Motocycles', class: 'fa fa-cogs' },
                { title: 'Home Improments', class: 'fa fa-cogs' },
                { title: 'Vouchers & Services', class: 'fa fa-cogs' },
            ],
            menuOptions: [
                { title: 'Meu perfil', class: 'fa fa-user' },
                { title: 'Favoritos', class: 'fa fa-heart' },
                { title: 'Carrinho', class: 'fa fa-shopping-bag' },
                { title: 'Meus pedidos', class: 'fa fa-shopping-cart' },
            ],
        }
    },
    methods: {
        toggleSidebar() {
			setTimeout(() => {
				this.showSidebar = !this.showSidebar
			}, 50) 
        },
        away() {
            if (this.showSidebar === true) this.showSidebar = false
        },
    },
}
</script>

<style>
</style>