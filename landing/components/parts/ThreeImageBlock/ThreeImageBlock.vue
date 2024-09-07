<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGsapAnimation } from '~/composable/useGsapAnimation';
import { threeImageBlock } from '~/data/gsapAnimation';

    interface Props {
        content: {
            titles: string[];
            textContent: {textClass: string, text: string};
            images: string[] | null[];
            stainsImages: Array<string | null>;
            backgroundColorClass: string;
            titlesFontSize?: string,
        };
    }

    const triggerBlock = ref();

    onMounted(() => {
        if (triggerBlock.value) {
            useGsapAnimation(triggerBlock, threeImageBlock);
        }

      
    })

    defineProps<Props>();

    

</script>

<template>
  <article class="block-three three-images" :class="content.backgroundColorClass" ref="triggerBlock">
        <div class="block-three-wrapper">
            <div class="block-part-one">
                <div class="image-block-first">
                    <div class="stains" v-if="content.stainsImages[0]">
                        <img :src="content.stainsImages[0]" alt=" " class="staing-image lazy-img"></img>
                    </div>
                    <img class="image-first image-first-th lazy-img" v-if="content.images[0]" 
                    :src="content.images[0]" 
                    alt="earing"
                    >
                </div>
                <div class="background-hand" v-if="content.stainsImages[1]" >
                    <img class="background-image-hand image-hands-th lazy-img" :src="content.stainsImages[1]" alt="hand">
                </div>
            </div>
            <div class="block-part-two">
                <div class="centr-block-image" v-if="content.images[1]" id="centr-block-image">
                    <img class="image-second lazy-img" :src="content.images[1]" alt="hands">
                </div>
            </div>
            <div class="block-part-three" >
                <div class="text-block">
                    <div class="title block-three-title-th" :class="content.titlesFontSize || ''">
                        <h2 v-for="title in content.titles" :key="title">{{ title }}</h2>
                    </div>
                    <div class="text-content block-three-text-th" :class="content.textContent.textClass">
                        <p>{{ content.textContent.text }}</p>
                    </div>
                    <div class="dots-bottom" v-if="content.stainsImages[2]">
                        <img class="background-dots-bottom lazy-img" :src="content.stainsImages[2]" alt="hand">
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
  </article>
</template>


<style lang="scss" scoped>


    .gray-back {
        background-color: #ddd4c1;
    }

    .pink-back {
        background-color: #e3d8e7;
    }

    .blue-back {
        background-color: #acc7d8;
    }

    .block-three {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        min-height: 110vh;
        padding: 100px 0;
        z-index: -25;
    }

    .image-block-first {
        text-align: right;
    }
    .block-three-wrapper {
        width: 70%;
        height: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    .image-first {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition-duration: 100ms;
        transform: translateX(20%);
    }
    .block-part-one {
        position: relative;
        width: 30%;
    }
    .block-part-two {
        width: 35%;
        margin: 0 auto;
    }
    .block-part-three {
        width: 35%;
        height: 70%;
    }
    .image-second {
        position: relative;
        object-fit: cover;
        z-index: -1;
        width: 100%;
        height: 500px;
    }
    .background-hand {
        width: 100%;
        height: auto;
    }
    .background-image-hand {
        position: absolute;
        z-index: 50;
        bottom: -50%;
        left: -30%;
        width: 100%;
        height: 100%;

        object-fit: contain;
    }
    .text-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .title {
        margin: 25px 0;
        h2 {
            color: #fff;
            font-size: 3.8rem;
            transform: translateX(-45px);
        }
    }
    .text-content {
        padding: 0 15px;
    }
    .main-page-text {
        p {
            color: #fff;
            font-size: 1.4rem;
            line-height: 2.1rem;
            text-transform: uppercase;
        }
    }
    .contuct-us-page-text {
        padding-top: 15px;
        p {
            color: #666666;
            font-size: 14px;
        }
    }
    .stains {
        position: absolute;
        top: -20%;
        z-index: -5;
    }
    .staing-image {
        width: 100%;
        height: 100%;
    }
    .text-block {
        position: relative;
    }
    .dots-bottom {
        position: absolute;
        width: 80%;
        left: -50%;
        top: -42%;
        height: 80%;
        transform: rotate(-122deg);
        z-index: -2;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .title-size-middle {
        h2 {
            transform: translateX(-55px);
            font-size: 2.6rem;
        }
    }
    .about-us-page-text {
        p {
            font-size: 1.1rem;;
            color: #474747;
            line-height: 1.3rem;
            transform: translateX(20%)
        }
    }
    .background-dots-bottom {
        position: relative;
        z-index: -5;
    }
</style>