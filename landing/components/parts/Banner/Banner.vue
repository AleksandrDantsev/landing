<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useGsapAnimation } from '~/composable/useGsapAnimation';
import { header } from '~/data/gsapAnimation'; 

    interface Props {
        content: {
            image: string;
            text: string;
        },
    }

    const triggerBlock = ref<null | Element>(null);

    onMounted(() => {
        if (triggerBlock.value) {
        useGsapAnimation(triggerBlock, header);
    }
    })

    defineProps<Props>();

</script>

<template>
    <article class="banner" ref="triggerBlock">
        <div class="banner-image">
            <img :src="content.image" alt=" " class="banner-image-anim">
        </div>
        <div class="banner-greating">
            <h2 class="banner-greating-text">
                {{ content.text }}
            </h2>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        transition-duration: 1s;
    }
    .banner-image {
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: scale(1.2);
        opacity: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .banner-greating {
        position: absolute;
        font-size: 3rem;
        top: 50%;
        left: 50px;
        right: 50px;
        text-align: center;
        transform: translate3d(0, -50%, 0);
    }
    .banner-greating-text {
        color: #ffffff;
    }
    .banner-image-anim {
        will-change: transform;
    }

    @media (max-width: 950px) {
        .banner-greating {
            font-size: 2.5rem;
        }
    }
</style>