<script lang="ts" setup>
    import { computed } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore from "swiper";
    import { Autoplay } from 'swiper/modules';

    SwiperCore.use([Autoplay])

    interface Props {
        arraySlides: Array<{
            nameSlide?: string | null;
            description?: string | null;
            image: string;
        }>;
        slidesPerView: number;
        spaceBetween: number;
        startLinkSlider: boolean;
        autoplay?: boolean;
        autoplayDelay?: number;
        speed?: number;
        loop?: boolean;
        navigation?: boolean;
    }

    defineProps<Props>();
    const slots = useSlots();

    const hasSlotContent = computed(() => {
        return slots.default && slots.default().length > 0;
    });



</script>

<template>
    <div class="slider-wrapper">
        <Swiper
            :slidesPerView="slidesPerView"
            :spaceBetween="spaceBetween"
            :pagination="{ clickable: true }"
            :navigation="Boolean(navigation)"
            :slideToClickedSlide="true"
            :loop="Boolean(loop)"
            :speed="Boolean(speed) !== false ? speed : 0"
            :autoplay="autoplay ? { delay: autoplayDelay, disableOnInteraction: true } : false"
            >
            <SwiperSlide v-if="hasSlotContent && startLinkSlider">
                <slot></slot>
            </SwiperSlide>
            <SwiperSlide v-for="(slide, index) in arraySlides" :key="index">
                <div class="description-side"><span>{{ slide.description }}</span></div>
                <div class="image-wrapper">
                    <img :src="slide.image" class="swiper-lazy" :alt="slide.nameSlide || ' '" loading="lazy"/>
                    <div class="name" v-if="slide.nameSlide">{{ slide.nameSlide }}</div>
                </div>
                <div class="swiper-lazy-preloader"><div class="custom-preloader">werwer</div></div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="scss" scoped>

    .description-side {
        position: relative;
        display: flex;
        justify-content: end;
        align-items: start;
        height: 100%;
        text-align: right;
        width: 15%;
        span {
            display: inline-block;
            position: relative;
            height: min-content;
            transform: rotate(-90deg) translateY(-120%);
            font-size: 1.2rem;
            color: #dddddd;
            transform-origin: top right; 
            white-space: nowrap;
        }
    }
    .name {
        height: 10%;
        font-size: 1.6rem;
        margin-top: 4px;
        color: #dddddd;
    }

    .swiper-lazy {

    }
    .swiper-lazy-preloader {
        position: relative;
    }
    .custom-preloader {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
    }
    .image-wrapper {
        width: 85%;
    }
    .slider-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .swiper {
        height: 100%;
        cursor: grab;
    }

    .swiper-slide {
        display: flex;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        width: calc(100% / 5);
        height: 100%;
        img {
            user-select: none;
            width: 100%;
            height: 90%;
            object-fit: cover;
        }
    }

    .swiper-pagination {
        bottom: 10px;
        text-align: center;

        .swiper-pagination-bullet {
        background: #00000080;
        width: 12px;
        height: 12px;
        opacity: 0.8;

        &-active {
            background: #007bff;
        }
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #007bff;
        width: 40px;
        height: 40px;
        background: #ffffffcc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
        font-size: 24px;
        }
    }
</style>

