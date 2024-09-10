<script setup lang="ts">
    import Slider from '../Slider/Slider.vue';
    import type { TProductSlider }  from '~/types/type_products_slider';
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useGsapAnimation } from '~/composable/useGsapAnimation';
    import { slider } from '~/data/gsapAnimation';

    interface Props {
        title: string;
        description: string;
        startLinkSlider: boolean;
        slidesData: TProductSlider;
        spaceBetween?: number; 
        isChangeSliders?: boolean;
    }
    defineProps<Props>();

    const screenWidth = window.screen.width;
    const triggerBlock = ref();
    const quantitySlide = ref(calculateQuantitySlide());

    function calculateQuantitySlide() {
        const quantitySlide = {
            "800px" : 3,
            "650px" : 2,
            "450px" : 1,
        }
        let quantity = 4;

        for (let size in quantitySlide) {
            if (window.matchMedia(`(max-width: ${size})`).matches) {
                quantity = quantitySlide[size as keyof typeof quantitySlide]
            }
        }
        return quantity;
    }

    onMounted(() => {
        useGsapAnimation(triggerBlock, slider);
        window.addEventListener("resize", () => quantitySlide.value = calculateQuantitySlide());
    })
    onUnmounted(() => {
        window.removeEventListener("resize", () => quantitySlide.value = calculateQuantitySlide());
    });

    
</script>

<template>
  <article class="slider-products-main">
        <div class="title-block">
            <h2 class="title title-products-anim">
                {{ title }}
            </h2>
            <div class="description description-products-anim">
                {{ description }}
            </div>
            <slot></slot>
        </div>
        <div class="slider-wrapper slider-anim" ref="triggerBlock">
            <Slider :array-slides="slidesData" 
                    :slides-per-view="quantitySlide"
                    :space-between="spaceBetween || 25" 
                    :speed="500"
                    :start-link-slider="startLinkSlider"
                    :width-window="screenWidth"
                    :class="isChangeSliders ? 'change-sliders': 'outset-slider'"
                    >
                <div class="head-of-slider" v-if="startLinkSlider">
                    <NuxtLink to='/menus/nails'>
                        <span class="head-text">Check All Products</span>
                    </NuxtLink>
                </div>
            </Slider>
        </div>
  </article>
</template>

<style lang="scss" scoped>
    .change-sliders {
        animation: change-sliders-anim ease-out 700ms;
    }
    .outset-slider {
        transition-duration: 700ms;
        animation: change-sliders-anim-reverse ease-out 700ms;
    }
    @keyframes change-sliders-anim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes change-sliders-anim-reverse {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .slider-products-main {
        position: relative;
        z-index: 10;
        min-height: 100vh;
        overflow: hidden;
        background-color: #697e5b;
    }
    .slider-wrapper {
        position: relative;
        bottom: -5px;
        height: 360px;
        overflow: hidden;
    }
    .title-block {
        padding: 100px 0 50px 0;
        width: 100%;
        color: #fff;
        text-align: center;
    }
    .title {
        color: #fff;
        font-size: 3.5rem;
        margin: 10px 0 30px 0;
    }
    .description {
        width: 30%;
        margin: 0 auto;
        line-height: 2rem;
        color: #ebeaea;
        font-size: 1.4rem;
    }
    .head-of-slider {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }
    }
    .head-text {
        text-align: center;
        font-size: 2.3rem;
        transform: rotate(-90deg);
        line-height: 3rem;
        color: #fff;
    }

    @media (max-width: 1000px) {
        .description {
            width: 65%;
        }
    }
    @media (max-width: 500px) {
        .head-of-slider {
            width: 45%;
        }
        .description {
            width: 75%;
        }
        .title-block {
            width: 92%;
            text-align: center;
            margin: 0 auto;
        }
    }
</style>