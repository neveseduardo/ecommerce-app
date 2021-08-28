<template>
    <header class="header">
        <h1>
            <a><i class="fa fa-bars"></i></a><a>ECOMMERCE</a>
        </h1>

        <form action="">
            <el-input
                placeholder="Pesquisar..."
                v-model="search"
                class="input-with-select"
            >
                <el-select clearable multiple collapse-tags v-model="category" slot="prepend" placeholder="Categorias">
                    <el-option v-for="(item, index) in select" :key="index" :label="item.label" :value="index"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </form>

        <ul class="list-itens">
            <li><a><i class="fa fa-heart"></i></a></li>
            <li><a><i class="fa fa-shopping-bag"></i></a></li>
            <li><a><i class="fa fa-user"></i></a></li>
        </ul>

        <nav class="navbar">
            <ul>
                <li>link</li>
            </ul>
            <ul>
                <li>link</li>
            </ul>
            <ul>
                <li>link</li>
            </ul>
            <ul>
                <li>link</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderNavbar',
    data() {
        return {
            search: '',
            category: '',
            select: [
                { label: 'Livros'},
                { label: 'Filmes'},
                { label: 'Games'},
                { label: 'Camisetas'},
            ]
        }
    },
    methods: {

    }
}
</script>

<style>
</style>