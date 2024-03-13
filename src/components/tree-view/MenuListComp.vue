<script>
import MenuItemComp from './MenuItemComp.vue';

export default {
    components: {
        MenuItemComp
    },

    props: {
        list: Array
    },

    data() {
        return {

        }
    },
}
</script>

<template>
    <div v-if="list && list.length">
        <ul v-for="item in list" :key="item.label">
            <MenuItemComp :items="item" />
        </ul>
    </div>
</template>