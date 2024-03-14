<script>
import UserComp from './UserComp.vue';

export default {
    components: {
        UserComp
    },
    data() {
        return {
            userName: "A-believer",
            loading: false,
            userData: null,
            errorMessage: null
        }
    },

    methods: {
        async fetchGithubData() {
            try {
                this.loading = true
                const res = await fetch(`https://api.github.com/users/${this.userName}`);
                const data = await res.json();
                if (data) {
                    this.userData = data
                    this.loading = false
                    this.userName = ''

                }
            } catch (error) {
                console.log(error);
                this.errorMessage = error.message
                this.loading = false

            }
        }
    },

    mounted() {
        this.fetchGithubData()
    },
}
</script>

<template>
    <div className='flex flex-col justify-center items-center w-full min-h-screen gap-y-14 bg-black text-white'>
        <div className='flex flex-col gap-y-3'>

            <input placeholder="enter username" type="text" v-model="userName" className='border-2 border-purple-400 focus:border-purple-700 active:outline-none focus:outline-none py-1.5
            pl-2 pr-20 rounded-md text-purple-500 bg-transparent placeholder:text-purple-400' />

            <button
                className='px-4 py-1 rounded-md border-none w-fit mx-auto text-white bg-purple-500 hover:bg-purple-700'
                @click="fetchGithubData">
                Search
            </button>
        </div>

        <div v-if="loading">
            Loading
        </div>

        <div v-if="!loading && userData">
            <UserComp :user="userData" />
        </div>
    </div>
</template>