<script>
import ModalComp from './ModalComp.vue';

export default {
    components: {
        ModalComp
    },
    data() {
        return {
            openModal: false,
            id: 'Modal',
            header: 'Header',
            body: 'Body',
            footer: 'Footer'

        }
    },

    methods: {
        handleModalOpen() {
            this.openModal = true
        },
        handleModalClose() {
            this.openModal = false
        }
    }

}
</script>

<template>
    <div class="bg-black h-screen w-full flex justify-center items-center text-white relative">
        <button class="bg-white border border-black px-5 py-3 rounded-md shadow-lg drop-shadow-lg shadow-pink-200
            font-bold active:translate-x-[2px] active:translate-y-[2px] hover:translate-x-[2px] hover:translate-y-[2px]
            duration-200 text-black" @click="handleModalOpen">
            Open Modal
        </button>
        <div class="bg-white/5 w-full h-screen flex items-center justify-center absolute" v-if="openModal">
            <ModalComp :id="id" :header="header" :body="body" :footer="footer" :onClose="handleModalClose" />
        </div>
    </div>
</template>