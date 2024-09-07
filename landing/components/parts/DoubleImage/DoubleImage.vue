<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { doubleImage } from '~/data/gsapAnimation';
    import { useGsapAnimation } from '~/composable/useGsapAnimation';

    interface Props {
        image: string[];
    }

    const triggerBlock = ref();

    onMounted(() => {
        console.log(triggerBlock)
        useGsapAnimation(triggerBlock, doubleImage)
    })

    defineProps<Props>();

</script>

<template>
    <article class="images-block double-image" ref="triggerBlock">
        <div class="image-content">
            <img :src="image[0]" alt="#" class="image-double-view lazy-img">
        </div>
        <div class="image-content">
            <img :src="image[1]" alt="#" class="image-double-view lazy-img">
        </div>
    </article>
</template>

<style lang="scss" scoped>
    .images-block {
        display: flex;
        width: 100%;
        height: 110vh;
    }
    .image-content {
        width: 50%;
        height: 100%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            transform: scale(1.5);
        }
    }
</style>