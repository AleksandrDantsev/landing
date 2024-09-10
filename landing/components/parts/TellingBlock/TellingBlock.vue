<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGsapAnimation } from '~/composable/useGsapAnimation';
import { tellingBlock } from '~/data/gsapAnimation';

interface Props {
    content: {
        mainIMG: string,
        titleTop: string,
        titleBottom: string,
        text: string,
        images: string[],
        colorBackClass: string,
    },
}


const triggerBlock = ref();

onMounted(() => {
    if (triggerBlock.value) {
        useGsapAnimation(triggerBlock, tellingBlock)
    }
})

defineProps<Props>();

</script>

<template>
    <article class="telling-block" :class="content.colorBackClass" ref="triggerBlock">
        <div class="main-image-block image-left-telling">
            <img :src="content.mainIMG" alt="#" class="main-image lazy-img">
        </div>
        <div class="content-block">
            <div class="title-block">
                <h3 class="title-telling-1">{{ content.titleTop }}</h3>
                <h3 class="title-telling-2">{{ content.titleBottom }}</h3>
            </div>
            <div class="info-block">
                <div class="info-block-text info-block-text-telling">{{ content.text }}</div>
                <div class="info-block-images">
                    <div v-if="content.images[0]" class="image-one">
                        <img :src="content.images[0]"  alt="#" class="mini-image-telling lazy-img">
                    </div>
                    <div v-if="content.images[1]" class="image-two" >
                        <img :src="content.images[1]" alt="#" class="mini-image-telling lazy-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="color-line"></div>
    </article>
</template>

<style lang="scss" scoped>

    .blue-back {
        background-color: #bfcfcd;
    }

    .purple-back {
        background-color: #dbd2e2;
    }

    .telling-block {
        position: relative;
        display: flex;
        width: 100%;
        padding: 140px 0;
        z-index: -10;
    }
    .main-image-block {
        width: 40%;
        height: 100%;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .content-block {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        padding: 0 50px;
        width: 60%;
        height: 80%;
    }
    .title-block {
        transform: translateX(-20%);
        margin-bottom: 40px;
        h3 {
            font-size: 4rem;
            color: #ffffff;
        }
    }
    .info-block {
        display: flex;
    }
    .info-block-text {
        width: 35%;
        line-height: 20px;
        font-weight: 600;
        color: #6e6e6e;
        font-size: 15px;
    }
    .info-block-images {
        display: flex; 
        width: 65%;
    }
    .image-one {
        width: 220px;
        height: 220px;
        transform: translate3d(15%, 80%, 0);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .image-two {
        width: 230px;
        height: 230px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .color-line {
        width: 100%;
        height: 250px;
        background-color: #f1f1f1;
        position: absolute;
        z-index: -1;
        bottom: 0px;
    }

    @media (max-width: 1200px) {
        .color-line {
            height: 18%;
        }
        .image-one,
        .image-two {
            width: 180px;
            height: 180px;
        }
        .title-block {
            width: 100%;
        }
    }
    @media (max-width: 960px) {
        .color-line {
            height: 10%;
        }
        .title-block {
            h3 {
                font-size: 3rem;
            }
        }
    }
    @media (max-width: 850px) {
        .telling-block {
            flex-direction: column;
            padding: 50px 0 150px 0;
        }
        .main-image-block {
            width: 60%;
        }
        .content-block {
            width: 80%;
            padding: 0;
            margin: 20px auto;
        }
        .info-block {
            flex-direction: column;
        }
        .title-block {
            transform: none;
        }
        .info-block-text {
            width: 90%;
            margin-bottom: 50px;
        }
        .info-block-images {
            justify-content: space-evenly;
            width: 100%;
        }
        .image-one,
        .image-two {
            width: 280px;
            height: 280px;
            transform: none;
        }
        .image-one {
            transform: translateY(40%);
        }
    }
    @media (max-width: 650px) {
        .main-image-block {
            width: 70%;
        }
    }
    @media (max-width: 500px) {
        .image-one,
        .image-two {
            width: 180px;
            height: 180px;
        }
        .title-block {
            h3 {
                font-size: 2rem;
                text-align: center;
            }
        }
        .main-image-block {
            width: 100%;
        }
    }
    @media (max-width: 350px) {
        .image-one,
        .image-two {
            width: 120px;
            height: 120px;
        }
        .title-block {
            h3 {
                font-size: 1.8rem;
            }
        }
        .telling-block {
            padding-bottom: 50px;
        }
    }
</style>