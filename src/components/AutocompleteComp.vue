<script>

export default {
    data() {
        return {
            loading: false,
            users: [],
            errorMessage: '',
            searchParams: '',
            showDropDown: false,
            filteredUsers: []
        }
    },

    methods: {
        handleChange(e) {
            const query = e.target.value.toLowerCase();
            this.searchParams = query
            if (query.length > 0) {
                const filteredData =
                    this.users && this.users.length
                        ? this.users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                        : [];
                console.log(filteredData)
                this.filteredUsers = [...filteredData]

                this.showDropDown = true
            } else {
                this.showDropDown = false

            }
        },
        handleClick(value) {
            this.showDropDown = false
            this.searchParams = value
            this.filteredUsers = []
        },

        async fetchListOfUsers() {
            try {
                this.loading = true;
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();

                if (data && data.users && data.users.length) {
                    let userData = []

                    for (let i = 0; i < data.users.length; i++) {

                        userData.push(data.users[i].firstName)

                    }
                    this.users = userData
                }
                this.loading = false;
            } catch (error) {
                this.loading = false
                this.errorMessage = error.message
            }
        }
    },

    mounted() {
        this.fetchListOfUsers()
    },
}
</script>

<template>
    <section
        class='bg-black min-h-screen w-full flex flex-col gap-y-10 items-center text-gray-500 transition-all duration-1000 pt-64 pb-10'>

        <h1 v-if="loading" class='text-xl animate-pulse flex flex-col'>
            <span>Loading Data!</span>
            <span>Please wait...</span>
        </h1>
        <input v-else :value="searchParams" @input="handleChange" placeholder='Search Users here...'
            class='bg-transparent border-b-2 border-gray-500 py-2 pl-4 w-64 text-xl outline-none active:border-gray-800 autofill:bg-transparent' />



        <ul v-if="showDropDown && !loading"
            class='border-l-2 border-b-2 border-gray-600 w-64 text-left pl-2 text-blue-500 transition-all h-fit max-h-64 overflow-scroll duration-1000 font-bold text-lg'>


            <li v-if="filteredUsers && filteredUsers.length" class='cursor-pointer w-64 pb-2' key={index}>
                <p v-for="item, index in filteredUsers" :key="index" @click="handleClick(item)">
                    {{ item }}
                </p>
            </li>

            <li v-else class='w-64 pb-2 text-red-700'>User not found</li>

        </ul>

    </section>
</template>