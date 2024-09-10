<script lang="ts" setup>
    import { computed } from 'vue';

    const props = defineProps<{
        imgPer: Array<string>;
        src: string,
    }>();

    const param = computed(() => {
        let line = '';
            props.imgPer.forEach(el => line += el + ", ");
        return line;
    })

</script>

<template>
    <img :src="src" :srcset="param" sizes="100vw" alt="_">
</template>
