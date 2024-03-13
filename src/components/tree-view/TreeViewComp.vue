<script>
import MenuListComp from './MenuListComp.vue';
import { menus } from '../../../data';


export default {
    components: {
        MenuListComp
    },

    data() {
        return {
            menuArr: menus
        }
    },
}
</script>

<template>
    <MenuListComp :list="menuArr" />
</template>