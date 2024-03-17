<script>
export default {
    props: {
        onClick: Function,
        value: String,
        index: Number
    }
}
</script>

<template>
    <button @click="onClick"
        class="border border-purple-500 text-[40px] p-0 text-center float-left h-[100px] w-[100px] cursor-pointer">
        {{ value }}
    </button>
</template>