<script>
export default {
    data() {
        return {
            items: [],
            loading: false,
            errorMessage: '',
            scrollPercentage: 0
        }
    },

    methods: {
        async fetchData() {

            try {
                this.loading = true
                const res = await fetch('https://dummyjson.com/products?limit=100')
                const data = await res.json()

                if (data && data.products && data.products.length) {

                    this.items = [...data.products]
                    this.loading = false

                }
            } catch (error) {
                this.errorMessage = error.errorMessage
                this.loading = false
            }

        },

        handleScrollPercentage() {
            const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop

            const height = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            this.scrollPercentage = (howMuchScroll / height) * 100
            console.log(Math.floor40(this.scrollPercentage))

        }
    },

    mounted() {
        this.fetchData()

        window.addEventListener('scroll', this.handleScrollPercentage);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScrollPercentage);
    },
}

</script>

<template>
    <div :style="{ width: '100%', position: 'fixed', zIndex: '10', backgroundColor: 'white' }">
        <h1 :style="{ height: '75px', textAlign: 'center' }">Scroll Indicator</h1>
        <div :style="{
        height: '4px',
        backgroundColor: 'yellow',
        width: '100%'
    }">
            <div :style="{
        height: '4px',
        backgroundColor: 'blue',
        width: `${scrollPercentage}%`
    }"></div>
        </div>

    </div>
    <div :style="{ paddingTop: '85px' }" v-if="loading">
        Loading
    </div>

    <div v-if="errorMessage" :style="{ paddingTop: '85px', zIndex: '-9' }">
        {{ errorMessage }}
    </div>

    <div :style="{ paddingTop: '85px' }">
        <div v-for="item in items" :key="item.id" :style="{
        textAlign: 'center',
        padding: '10px 0px'

    }">
            {{ item.title }}
        </div>
    </div>



</template>