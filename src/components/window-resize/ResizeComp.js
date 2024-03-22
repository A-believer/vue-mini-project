import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowResize() {
const windowSize = ref({
width: 0,
height: 0,
});

function handleResize() {
windowSize.value.width = window.innerWidth;
windowSize.value.height = window.innerHeight;
}

onMounted(() => {
handleResize();
window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
window.removeEventListener('resize', handleResize);
});

return windowSize;
}