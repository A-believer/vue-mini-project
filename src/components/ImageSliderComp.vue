<script>
const url = 'https://picsum.photos/v2/list'
const limit = '10'
const page = '1'

export default {
    data() {
        return {
            images: [],
            currentSlide: 0,
            errorMsg: '',
            loading: true
        }

    },

    methods: {
        async fetchData(getUrl) {
            try {

                const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
                const data = await res.json()
                // console.log(data)
                if (data) {
                    this.images = data
                    this.loading = false
                    console.log(this.images)
                }
            } catch (error) {
                this.errorMsg = error.message
                this.loading = false
            }
        },

        handlePrevious() {
            this.currentSlide = this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1
        },
        handleNext() {
            this.currentSlide = this.currentSlide === (this.images.length - 1) ? 0 : this.currentSlide + 1
            console.log(this.currentSlide)
        },
    },
    mounted() {

        this.fetchData(url)

    }
}
</script>

<template>
    <section :style="{
        width: '700px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px'
    }">
        <svg @click="handlePrevious" :style="{
        position: absolute,
        left: '20px'
    }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div v-if="loading">
            Loading...
        </div>

        <div v-else :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'

    }">
            <div v-for="image in images" :key="image.id" v-show="currentSlide === Number(image.id)">
                <img :src="image.download_url" :alt="image.download_url">
            </div>
            <div :style="{
        display: 'flex',

    }">
                <div :style="{ display: 'flex', gap: '5px' }">
                    <span @click="currentSlide = Number(image.id)" v-for="image in images" :key="image.id" :style="{
        width: '15px',
        height: '15px',
        cursor: 'pointer',
        borderRadius: '100%',
        border: '2px solid #000000',
        backgroundColor: currentSlide === Number(image.id) ? '#000000' : '#ffffff'

    }"></span>
                </div>

            </div>

        </div>

        <svg @click="handleNext" :style="{
        position: absolute,
        right: '20px'
    }" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    </section>
</template>

<style>
svg {
    width: 40px;
    height: 40px;
    cursor: pointer
}

img {
    width: 400px;
    height: 400px;
}
</style>