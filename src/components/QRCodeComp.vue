<script>
import QrcodeVue from 'qrcode.vue'
export default {
    data() {
        return {
            input: '',
            qrcode: ''
        }
    },

    components: {
        QrcodeVue
    },

    methods: {
        handleQrCodeGenerator() {
            this.qrcode = this.input
            this.input = ''
            // alert(`${this.qrcode} is ${this.input}`)
        }
    },
}
</script>

<template>
    <section>
        <div>
            <input v-model="input">
            <button @click="handleQrCodeGenerator">Generate</button>
        </div>

        <qrcode-vue :value="qrcode" :size="300" level="H" :class="code" />
        <p>{{ input }}</p>
    </section>

</template>

<style scoped>
section {
    width: 700px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
}

.code {
    width: 100%;
    margin: 0 auto;
}

button {
    cursor: pointer;
}
</style>