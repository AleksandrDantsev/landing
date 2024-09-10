<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { singlePhoto } from '~/data/gsapAnimation';
    import { useGsapAnimation } from '~/composable/useGsapAnimation';


    interface Props {
        content: {
            backgroundClass: string;
            mainImage: string | string[];
            stainsIMG: Array<string | null>;
            titles: Array<string>;
            textContent: string | null;
        };
        currentImageInCollage?: string;
    }
    
    const triggerBlock = ref();

    onMounted(() => {
        if (triggerBlock.value) {
            useGsapAnimation(triggerBlock, singlePhoto);
        }
    })

    defineProps<Props>();

</script>

<template>
    <article class="single-photo-block" :class="content.backgroundClass" ref="triggerBlock">
        <div class="single-photo-block-wrapper">
            <div class="text-container">
                <div class="span-part-text part-text-single-anim">
                    {{ content.titles[0] }}
                </div>
                <div class="color-line-wrapper">
                    <div class="color-line"></div>  
                </div>
                <div class="span-part-text part-text-single-anim right-text">
                    {{ content.titles[1] }}
                </div>
            </div>
            <div class="image-container">
                <div class="stain left-top-stain" v-if="content.stainsIMG[0]">
                    <img :src="content.stainsIMG[0]" alt=" " class="lazy-img">
                </div>
                <div class="stain right-top-stain" v-if="content.stainsIMG[1]">
                    <img :src="content.stainsIMG[1]" alt=" " class="right-top-stain-single-anim lazy-img">
                </div>
                <div class="image-conteiner">
                    <img :src="content.mainImage" alt=" " class="image image-single-anim lazy-img" v-if="typeof content.mainImage === 'string'">
                    <img v-for="image in content.mainImage" v-else-if="Array.isArray(content.mainImage)"
                                :key="image" 
                                :src="image" 
                                alt=" " 
                                class="image images-collage image-single-anim lazy-img"
                                :class="{'active-image-collage': image === currentImageInCollage}"
                                >
                </div>
                <div class="content-text-block" v-if="content.textContent">
                    <p class="content-single-anim">{{ content.textContent }}</p>
                </div>
                <div class="stain left-bottom-stain" v-if="content.stainsIMG[2]">
                    <img :src="content.stainsIMG[2]" alt=" " class="left-bottom-stain-single-anim lazy-img">
                </div>
                <div class="stain right-bottom-stain" v-if="content.stainsIMG[3]">
                    <img :src="content.stainsIMG[3]" alt=" " class="lazy-img">
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    .stain {
        position: absolute;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .light-brown-back {
        background-color: #bebdb6;
    }

    .gray-back {
        background-color: #dbd3c3;
    }

    .single-photo-block {
        height: 120vh;
        width: 100%;
    }
    .single-photo-block-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 80%;
        margin: 0 auto;
    }
    .image-container {
        position: relative;
        width: 35%;
        min-height: 400px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .image {
        position: relative;
        z-index: 90;
        height: 100%;
        width: 100%;
        min-width: 300px;
        object-fit: cover;
        transition-duration: 700ms;
    }
    .left-top-stain {
        width: 200px;
        left: -20%;
        top: -50px;
    }
    .right-top-stain {
        top: -10%;
        right: -20%; 
        width: 200px;   
    }
    .left-bottom-stain {
        bottom: -12%;
        left: -22%; 
        width: 200px;   
    }
    .right-bottom-stain {
        bottom: -12%;
        right: -22%; 
        width: 120px;  
    }
    .text-container {
        display: flex;
        justify-content: center;
        position: absolute;
        font-size: 3rem;
        width: 100%;
        top: 50%;
        letter-spacing: 0.2rem;
        z-index: 999;
        white-space: nowrap;
    }
    .span-part-text {
        text-shadow: 0 1px 2px #53535391;
        color: #fff;
    }
    .color-line-wrapper {
        display: flex;
        align-items: center;
        flex-basis: 20%;
        padding: 0 30px 0 20px;
    }
    .color-line {
        width: 100%;
        border-bottom: solid 2px #e75151;
    }
    .content-text-block {
        position: absolute;
        width: 60%;
        right: -45%;
        bottom: 30px;
        z-index: 999;
        p {
            text-transform: uppercase;
            font-size: 1.1rem;
            line-height: 1.2rem; 
            text-shadow: 0 1px 2px #5353535e;
            color: #fff;
        }
    }
    .images-collage {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
    }
    .active-image-collage {
        opacity: 1;
    }
    @media (orientation: landscape) {
        .single-photo-block-wrapper {
            padding: 100px;
        }
        .single-photo-block {
            height: auto;
        }
    }

    @media (max-width: 1100px) {
        .span-part-text {
            font-size: 2rem;
        }
    }
    @media (max-width: 900px) {
        .color-line-wrapper {
            min-width: 150px;
        }
        .span-part-text {
            font-size: 1.8rem;
        }
    }
    @media (max-width: 780px) {
        .single-photo-block {
            height: auto;
            padding: 150px 0;
        }
        .single-photo-block-wrapper {
            width: 100%;
        }
        .color-line-wrapper {
            display: none;
        }
        .color-line-wrapper {
            min-width: 100px;
        }
        .span-part-text {
            font-size: 2.8rem;
        }
        .image-container {
            width: 60%;
        }
        .content-text-block {
            right: -15%;
            width: 75%;
            transform: translateY(-20px);
            p {
                font-size: 1rem;
            }
        }
        .text-container {
            width: 80%;
            height: 110%;
            flex-direction: column;
            top: unset;
            justify-content: space-between;

        }
        .right-text {
            align-self: end;
        }
    }
    @media (max-width: 580px) {
        .span-part-text {
            font-size: 2.2rem;
        }
        .text-container { 
            height: 120%;
        }
    }
    @media (max-width: 480px) {
        .span-part-text {
            font-size: 1.9rem;
        }
        .text-container { 
            height: 115%;
            width: 100%;
        }
        .image-container {
            width: 75%;
        }
        .span-part-text {
            text-align: center;
            padding: 8px 0;
        }
        .image-conteiner {
            img {
                min-width: unset;
            }
        }
        .content-single-anim { 
            font-size: 11px !important;
        }
    }
</style>
