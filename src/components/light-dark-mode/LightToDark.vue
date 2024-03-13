<script setup>
import { useLocalStorage } from './useLocalStorage';

const { toggleTheme } = useLocalStorage()

</script>

<template>
    <div className="light-dark-mode">
        <div className="container">
            <p>Hello World !</p>
            <button @click='toggleTheme'>Change Theme</button>
        </div>
    </div>
</template>

<style>
:root {
    --background: #ffffff;
    --text-primary: #000;
    --button-bg: #000;
    --button-text: #ffffff;
}

[data-theme="dark"] {
    --background: #000000;
    --text-primary: #fff;
    --button-bg: #fff;
    --button-text: #000;
}

.light-dark-mode {
    background-color: var(--background);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    transition: all 1s;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.light-dark-mode .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

.light-dark-mode .container p {
    color: var(--text-primary);
    font-size: 40px;
    margin: 0px;
}

.light-dark-mode .container button {
    background-color: var(--button-bg);
    border: 1px solid var(--button-bg);
    color: var(--button-text);
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}
</style>