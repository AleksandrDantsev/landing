<script setup lang="ts">
    import Slider from '../Slider/Slider.vue';
    import type { TProductSlider }  from '~/types/type_products_slider';
    import { ref, onMounted } from 'vue';
    import { useGsapAnimation } from '~/composable/useGsapAnimation';
    import { slider } from '~/data/gsapAnimation';

    interface Props {
        title: string;
        description: string;
        startLinkSlider: boolean;
        slidesData: TProductSlider;
        spaceBetween?: number; 
    }

    defineProps<Props>();

    const triggerBlock = ref();

    onMounted(() => {
        console.log(triggerBlock)
        useGsapAnimation(triggerBlock, slider);
})

    
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
                    :slides-per-view="4" 
                    :space-between="spaceBetween || 25" 
                    :speed="500"
                    :start-link-slider="startLinkSlider"
                    >
                <div class="head-of-slider" v-if="startLinkSlider">
                    <NuxtLink :to="'/menus/nails'">
                        <span class="head-text">Check All Products</span>
                    </NuxtLink>
                </div>
            </Slider>
        </div>
  </article>
</template>

<style lang="scss" scoped>
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
        height: 50vh;
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
        width: 50%;
        text-align: center;
        font-size: 2.3rem;
        transform: rotate(-90deg);
        line-height: 3rem;
        color: #fff;
    }
</style>