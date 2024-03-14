<script>
export default {
    props: {
        id: String,
        header: String,
        body: String,
        footer: String,
        onClose: Function

    }
}
</script>

<template>
    <div :id="id"
        class="w-[450px] h-[250px] bg-white text-black rounded-lg flex flex-col items-center justify-center relative">

        <div>
            <button class="text-3xl font-bold absolute right-4 top-2" @click="onClose">&times;</button>
            <h2>{{ header ? header : "Header" }}</h2>
        </div>
        <div>
            {{ body ?
        body
        :
        'This is our Modal Body'
            }}
        </div>
        <div>{{ footer ? footer : 'Footer' }}</div>
    </div>
</template>