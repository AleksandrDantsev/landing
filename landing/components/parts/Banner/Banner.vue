<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useGsapAnimation } from '~/composable/useGsapAnimation';
import { header } from '~/data/gsapAnimation'; 
import ImgSet from '~/components/UI/ImgSet.vue';

    interface Props {
        content: {
            image: string;
            imageMiddle: string,
            imageSmall: string,
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
            <ImgSet :src="content.image" 
                    :img-per="[`${content.image} 1900w`, 
                    `${content.imageMiddle} 1200w`, 
                    `${content.imageSmall} 600w`]" />
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
    @media (max-width: 750px) {
        .banner {
            height: 80vh;
        }
        .banner-greating {
            font-size: 2.2rem;
        }
    }
    @media (max-width: 550px) {
        .banner-greating {
            font-size: 1.8rem;
        }
        .banner {
            height: 80vh;
        }
        .banner-greating {
            top: 45%;
        }
    }
    @media (max-width: 350px) {
        .banner-greating {
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
</style>