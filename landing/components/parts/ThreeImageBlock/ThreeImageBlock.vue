<script setup lang="ts">
    interface Props {
        content: {
            titles: string[];
            textContent: {textClass: string, text: string};
            images: string[] | null[];
            stainsImages: string[];
            backgroundColorClass: string;
        };
    }

    const props = defineProps<Props>();

</script>

<template>
  <div class="block-three" :class="content.backgroundColorClass">
        <div class="block-three-wrapper">
            <div class="block-part-one">
                <div class="image-block-first">
                    <div class="stains">
                        <img :src="content.stainsImages[0]" alt=" " class="staing-image"></img>
                    </div>
                    <img class="image-first" :src="content.images[0]" alt="earing">
                </div>
                <div class="background-hand" v-if="content.stainsImages[1]">
                    <img class="background-image-hand" :src="content.stainsImages[1]" alt="hand">
                </div>
            </div>
            <div class="block-part-two">
                <div class="centr-block-image">
                    <img class="image-second" :src="content.images[1]" alt="hands">
                </div>
            </div>
            <div class="block-part-three">
                <div class="text-block">
                    <div class="title">
                        <h2 v-for="title in content.titles" :key="title">{{ title }}</h2>
                    </div>
                    <div class="text-content" :class="content.textContent.textClass">
                        <p>{{ content.textContent.text }}</p>
                    </div>
                    <div class="dots-bottom" v-if="content.stainsImages[2]">
                        <img class="background-dots-bottom" :src="content.stainsImages[2]" alt="hand">
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>


<style lang="scss" scoped>

    .gray-back {
        background-color: #dfe0e0;
    }

    .pink-back {
        background-color: #e3d8e7;
    }

    .block-three {
        position: relative;
        width: 100%;
        height: 120vh;
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
    }
    .text-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .title {
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
            font-size: 1.7rem;
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
</style>