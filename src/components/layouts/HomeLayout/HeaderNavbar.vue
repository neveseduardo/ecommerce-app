<template>
    <header class="header">
        <h1>
            <a @click="toggleSidebar"><i class="fa fa-bars"></i></a
            ><a>ECOMMERCE</a>
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
                        v-for="(item, index) in select"
                        :key="index"
                        :label="item.label"
                        :value="index"
                    ></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </form>

        <ul class="list-itens">
            <li>
                <a><i class="fa fa-heart"></i></a>
            </li>
            <li>
                <a><i class="fa fa-shopping-bag"></i></a>
            </li>
            <li>
                <a><i class="fa fa-user"></i></a>
            </li>
        </ul>

        <nav :class="showSidebar ? 'sidebar show' : 'sidebar'">
            <h1>
                ECOMMERCE <a @click="toggleSidebar"><i class="fa fa-times"></i></a>
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
                            <a>{{ item.title }}</a>
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
export default {
    name: 'HeaderNavbar',
    data() {
        return {
            showSidebar: false,
            search: '',
            category: '',
            activeName: 'first',
            select: [
                { label: 'Livros' },
                { label: 'Filmes' },
                { label: 'Games' },
                { label: 'Camisetas' },
            ],
            categories: [
                {title: 'Electronic', class: 'fa fa-cogs'},
                {title: 'Cellphones', class: 'fa fa-cogs'},
                {title: 'Videogames', class: 'fa fa-cogs'},
                {title: 'Home, Garden & Kitchen', class: 'fa fa-cogs'},
                {title: 'Health & Beauty', class: 'fa fa-cogs'},
                {title: 'Yewelry & Watches', class: 'fa fa-cogs'},
                {title: 'Computer & Technology', class: 'fa fa-cogs'},
                {title: 'Babies & Moms', class: 'fa fa-cogs'},
                {title: 'Phones & Accessories', class: 'fa fa-cogs'},
                {title: 'Books & Office', class: 'fa fa-cogs'},
                {title: 'Cars & Motocycles', class: 'fa fa-cogs'},
                {title: 'Home Improments', class: 'fa fa-cogs'},
                {title: 'Vouchers & Services', class: 'fa fa-cogs'},
            ],
			menuOptions: [
				{ title: 'Meu perfil'},
				{ title: 'Favoritos'},
				{ title: 'Carrinho'},
				{ title: 'Meus pedidos'},
			]
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar
        },
    },
}
</script>

<style>
</style>