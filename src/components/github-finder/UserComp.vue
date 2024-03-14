<script>
export default {

    props: {
        user: Object
    },
    data() {
        return {
            url: `https://github.com/${this.user.login}`,
            createdDate: new Date(this.user.created_at)
        }
    },
}
</script>

<template>
    <div class='bg-purple-500 flex rounded-xl items-center gap-x-10 p-10'>
        <div class="text-center space-y-2">

            <img :src="user.avatar_url" :alt="user.name" class='w-40 h-40 rounded-full' />

            <a class='text-xl underline underline-offset-4' :href="url">
                {{ user.name || user.login }}
            </a>
        </div>

        <div class='space-y-5'>
            <p>
                <span class='text-lg font-semibold tracking-widest'>
                    Joined:{{ " " }}
                </span>
                <span>{{ `${createdDate.getDate()}, ${createdDate.toLocaleString(
                "en-us",
                {
                    month: "short",
                }
            )} ${createdDate.getFullYear()}` }}</span>
            </p>
            <p>
                <span class='text-lg font-semibold tracking-widest'>
                    Public Repos:{{ " " }}
                </span>
                <span>{{ user.public_repos }}</span>
            </p>
            <p>
                <span class='text-lg font-semibold tracking-widest'>
                    Followers:{{ " " }}
                </span>
                <span>{{ user.followers }}</span>
            </p>
            <p>
                <span class='text-lg font-semibold tracking-widest'>
                    Following:{{ " " }}
                </span>
                <span>{{ user.following }}</span>
            </p>
        </div>
    </div>
</template>