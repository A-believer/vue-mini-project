<!-- eslint-disable no-unused-vars -->

<script setup>
import { ref } from 'vue'

const accordionData = ref([
    {
        id: '1',
        question: 'What is an accordion component in React?',
        answer:
            'An accordion is a UI component in React that allows you to create collapsible sections of content. It typically consists of a list of items, and each item can be expanded or collapsed to show or hide its content.'
    },
    {
        id: '2',
        question: 'How do you implement an accordion in React?',
        answer:
            'To implement an accordion in React, you can use state to track the open/closed state of each accordion item. When an item is clicked, you can update the state to toggle its visibility.'
    },
    {
        id: '3',
        question: 'Can accordions have nested sections?',
        answer:
            'Yes, accordions in React can have nested sections. Each section can be another accordion, allowing for a hierarchical structure.'
    },
    {
        id: '4',
        question: 'Are there any popular React libraries for accordions?',
        answer:
            "Yes, there are several popular React libraries that provide pre-built accordion components, such as 'react-accordion', 'react-accessible-accordion', and 'react-springaccordion'."
    }
])
const selected = ref(null)
const enableMultiple = ref(false)
const multipleSelected = ref([])

function handleSelected(id) {
    selected.value = selected.value === id ? null : id
}

function handleEnableMultiple() {
    enableMultiple.value = !enableMultiple.value
    alert(enableMultiple.value ? 'Multiple Selection Enabled' : 'Single Selection Enabled')
}

function handleMultipleSelected(id) {
    const newMultipleArray = [...multipleSelected.value]
    const findIndexOfSelected = newMultipleArray.indexOf(id)

    if (findIndexOfSelected === -1) newMultipleArray.push(id)
    else newMultipleArray.splice(findIndexOfSelected, 1)
    console.log(newMultipleArray)
    multipleSelected.value = newMultipleArray
}
</script>

<template>
    <section>
        <button @click="handleEnableMultiple">{{ enableMultiple
            ? "Enable Single Selection"
            : "Enable Multiple Selection" }}</button>
        <ul>
            <li v-for="data in accordionData" :key="data.id">
                <div class="question">
                    <p>
                        {{ data.question }}
                    </p>
                    <button @click="
            enableMultiple ? handleMultipleSelected(data.id) : handleSelected(data.id)
            ">
                        {{ enableMultiple
            ? multipleSelected.indexOf(data.id) !== -1
                ? "-"
                : "+"
            : selected === data.id
                ? "-"
                : "+" }}
                    </button>
                </div>


                <div class='answer' v-show="enableMultiple && multipleSelected.indexOf(data.id) !== -1">
                    {{ data.answer }}
                </div>


                <div class='answer' v-show="!enableMultiple && selected === data.id">{{ data.answer }}</div>

            </li>
        </ul>
    </section>
</template>

<style>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: white;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

li {
    list-style-type: none;
    padding: 20px;
    border-radius: 20px;
    background-color: indigo;
    width: 500px;
}

button {
    background-color: indigo;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
}

.question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}

.answer {
    font-size: 14px;
    line-height: 20px;
    word-spacing: 0.025em;
}
</style>
