<script>
import { reactive } from "vue"
const color = reactive({
    color: "#000000"
})

export default {
    data() {
        return {
            color,
            typeOfColor: "hex"
        }
    },

    methods: {
        randomizeColor(length) {
            return Math.floor(Math.random() * length)
        },
        handleRandomHexColor() {
            const hexValue = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",]
            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += hexValue[this.randomizeColor(hexValue.length)];
            }
            // console.log(hexColor)
            this.color.color = hexColor
            // console.log(this.color.color)
        },

        handleRandomRgbColor() {
            const r = this.randomizeColor(256);
            const g = this.randomizeColor(256);
            const b = this.randomizeColor(256);

            this.color.color = `rgb(${r}, ${g}, ${b})`
            // console.log(this.color.color)
        },


    },
    watch: {
        typeOfColor(value) {
            if (value === "hex") {
                this.handleRandomHexColor
            }
            else {
                this.handleRandomRgbColor
            }
        }

    }
}
</script>

<template>
    <section :style="{
        backgroundColor: color.color,
    }">
        <div class="buttons">
            <button @click="typeOfColor = 'hex'">Create Hex Color</button>
            <button @click="typeOfColor = 'rgb'">Create RGB Color</button>

            <button v-show="typeOfColor === 'hex'" @click="handleRandomHexColor">
                Generate Random Color
            </button>
            <button v-show="typeOfColor === 'rgb'" @click="handleRandomRgbColor">
                Generate Random Color
            </button>


        </div>
        <div class="colors" :style="{
        textAlign: center,
    }">
            <p>
                {{ typeOfColor === "rgb" ?

        "RGB Value"
        :
        "HEX Value"
                }}
            </p>
            <p>{{ color.color }}</p>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    color: white;
    margin: 0;
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    color: black;
    border: 1px solid black;
    background-color: white;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
}

.colors {
    font-size: 24px;
    margin-top: 10%;
}
</style>