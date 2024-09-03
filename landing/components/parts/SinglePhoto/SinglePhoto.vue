<script lang="ts" setup>

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

    defineProps<Props>();

</script>

<template>
    <article class="single-photo-block" :class="content.backgroundClass">
        <div class="single-photo-block-wrapper">
            <div class="text-container">
                <div class="span-part-text">
                    {{ content.titles[0] }}
                </div>
                <div class="color-line-wrapper">
                    <div class="color-line"></div>
                </div>
                <div class="span-part-text">
                    {{ content.titles[1] }}
                </div>
            </div>
            <div class="image-container">
                <div class="stain left-top-stain" v-if="content.stainsIMG[0]">
                    <img :src="content.stainsIMG[0]" alt=" ">
                </div>
                <div class="stain right-top-stain" v-if="content.stainsIMG[1]">
                    <img :src="content.stainsIMG[1]" alt=" ">
                </div>
                <img :src="content.mainImage" alt=" " class="image" v-if="typeof content.mainImage === 'string'">
                <img v-for="image in content.mainImage" v-else-if="Array.isArray(content.mainImage)"
                            :key="image" 
                            :src="image" 
                            alt=" " 
                            class="image images-collage"
                            :class="{'active-image-collage': image === currentImageInCollage}"
                            >
                <div class="content-text-block" v-if="content.textContent">
                    <p>{{ content.textContent }}</p>
                </div>
                <div class="stain left-bottom-stain" v-if="content.stainsIMG[2]">
                    <img :src="content.stainsIMG[2]" alt=" ">
                </div>
                <div class="stain right-bottom-stain" v-if="content.stainsIMG[3]">
                    <img :src="content.stainsIMG[3]" alt=" ">
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
        background-color: #d1c7a7b6;
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
        height: 70%;
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
</style>
