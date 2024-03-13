<script>


export default {
    data() {
        return {
            loading: false,
            products: [],
            count: 0,
            disableButton: false,
            errorMsg: null
        }
    },

    methods: {
        async fetchProducts() {
            try {
                this.loading = true
                const res = await fetch(
                    `https://dummyjson.com/products?limit=10&skip=${this.count === 0 ? 0 : this.count * 10
                    }`
                );
                const data = await res.json();

                if (data && data.products && data.products.length) {
                    this.products = [...this.products, ...data.products]
                    this.loading = false
                    console.log(this.products)
                }
            } catch (error) {
                this.errorMsg = error.message
                this.loading = false
                console.log(error.message)
            }
        }
    },

    mounted() {
        this.fetchProducts()
    },
    watch: {
        count: {
            handler() {
                this.fetchProducts()
            },
            once: false
        },
        products() {
            if (this.products && this.products.length === 100) this.disableButton = true
        }
    }
}
</script>

<template>
    <div :style="{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        lineHeight: '60px'
    }" v-if="loading">
        Loading Products...
    </div>



    <div v-else class="load-more-container">
        <p :style="{
        fontSize: '36px',
        textDecoration: 'underline'

    }">{{ products.length }}</p>

        <div class="product-container">

            <div v-for="item in products" class="product" :key='item.id'>
                <img :src='item.thumbnail' :alt='item.title' />
                <p>{{ item.title }}</p>
                <span :style="{
        position: 'absolute',
        top: '0px',
        right: '0px',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '10px 16px',
        fontSize: '20px',
        borderRadius: '0 0 0 35px'
    }">{{ item.id }}</span>
            </div>

        </div>
        <div class="button-container">
            <button v-show="!disableButton" :disabled='disableButton' @click='count++'>
                Load More Products
            </button>
            <p v-show="disableButton">
                You have reached to 100 products
            </p>

        </div>
    </div>
    <div :style="{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        lineHeight: '60px'
    }" v-if="errorMsg !== null">
        {{ errorMsg }}
    </div>
</template>

<style scoped>
.load-more-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.product-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 35px;
}

.product {
    padding: 10px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
}

.product img {
    width: 200px;
    height: 200px;
}

button {
    cursor: pointer;
    border: 2px black solid;
    padding: 10px 20px;
    background-color: black;
    color: white;
    border-radius: 8px;
    font-style: italic;
    font-size: 20px;
}
</style>