<template>
    <div>Window size: {{ windowSize.width }} x {{ windowSize.height }}</div>
</template>

<script>
import { useWindowResize } from './ResizeComp';

export default {
    setup() {
        const windowSize = useWindowResize();

        return {
            windowSize,
        };
    },
};
</script>