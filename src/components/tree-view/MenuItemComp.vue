<script>
import MenuListComp from './MenuListComp.vue';

export default {
    components: {
        MenuListComp
    },

    props: {
        items: Object
    },

    data() {
        return {
            currentChildren: {}
        }
    },

    methods: {
        handleChildrenToggle(itemLabel) {
            this.currentChildren = { ...this.currentChildren, [itemLabel]: !this.currentChildren[itemLabel] }
        }
    },
}
</script>

<template>
    <li>
        <div>
            <p>{{ items.label }}</p>
            <span @click="handleChildrenToggle(items.label)" v-if="items.children && items.children.length">
                {{ currentChildren[items.label] ? "-" : "+" }}
            </span>
        </div>

        <div v-if="items.children && items.children.length > 0 && currentChildren[items.label]">
            <MenuListComp :list="items.children" />
        </div>
    </li>
</template>
