import { watch, ref, onMounted } from "vue";

export function useLocalStorage() {
    const theme = ref(null)

    onMounted(() => 
        {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            theme.value = storedTheme
        } else {
            theme.value = 'light'
        }
        setTheme(theme.value)
    }
    ) 

    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    })

    function setTheme( themeVlaue) {
        const rootElement = document.documentElement
        rootElement.setAttribute('data-theme', themeVlaue)
    }

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return {theme, toggleTheme}
}