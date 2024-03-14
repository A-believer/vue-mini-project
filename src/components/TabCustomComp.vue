<script>
import { tabs } from '../../data';

export default {
    data() {
        return {
            currentIndex: 0,
            tabsMenu: tabs
        }
    },

    methods: {
        handleIndexChange(index) {
            return this.currentIndex = index
        }
    },
}
</script>

<template>
    <div :style="{
        display: 'flex',
        margin: '100px 0px 0px 0px',
        backgroundColor: 'lightblue',
        gap: '10px',
    }">
        <div :style="{
        padding: '10px 16px',
        backgroundColor: `${currentIndex === index ? 'blue' : ''}`,
        cursor: 'pointer'
    }" v-for=" tab, index in tabsMenu" :key="index">
            <span @click="handleIndexChange(index)">{{ tab.label }}</span>
        </div>
    </div>

    <div>
        {{ tabsMenu[currentIndex] && tabsMenu[currentIndex].content }}
    </div>
</template>