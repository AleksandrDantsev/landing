<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useGsapAnimation } from '~/composable/useGsapAnimation';
    import { collage } from '~/data/gsapAnimation';

    interface Props {
        content: {
            nameBlock: string,
            backColorClass: string,
            block1: {image: string, title: string | null, text: string | null};
            block2: {image: string};
            block3: {image: string, text: string, link?: string | null, nameLink: string | null};
            stains: Array<string | null>
        };
    }

    const triggerBlock = ref();


    onMounted(() => {
        console.log(triggerBlock)
        useGsapAnimation(triggerBlock, collage);
    })


    defineProps<Props>();
</script>

<template>
    <article class="collage" :class="content.backColorClass" ref="triggerBlock">
        <div class="collage-wrapper">
            <div class="title title-collage-anim">
                <div class="flower">
                    <img src="/flower.png" alt=" " class="lazy-img">
                </div>
                <h3>{{ content.nameBlock }}</h3>
            </div>
            <div class="blocks">
                <div class="left-block">
                    <div class="stain-left" v-if="content.stains[0]">
                        <img :src="content.stains[0]" alt=" " class="lazy-img">
                    </div>
                    <div class="image-left">
                        <img :src="content.block1.image" alt=" " class="image-left-collage-anim lazy-img">
                    </div>
                    <div class="left-content">
                        <div class="left-title" v-if="content.block1.title">
                            {{ content.block1.title }}
                        </div>
                        <div class="left-text-content" v-if="content.block1.text">
                            <p>{{ content.block1.text }}</p>
                        </div>
                    </div>
                </div>
                <div class="center-block">
                    <div class="image-center">
                        <img :src="content.block2.image" alt=" " class="lazy-img">
                    </div>
                </div>
                <div class="right-block">
                    <div class="right-content">
                        <div class="right-text right-text-collage-anim">
                            <p>{{ content.block3.text }}</p>
                        </div>
                        <div class="apply-email right-email-collage-anim" v-if="content.block3.link">
                            <NuxtLink :to="content.block3.link">{{ content.block3.nameLink }}</NuxtLink>
                        </div>
                    </div>
                    <div class="image-right">
                        <img :src="content.block3.image" alt=" " class="image-right-collage-anim lazy-img">
                    </div>
                    <div class="stain-right" v-if="content.stains[1]">
                        <img :src="content.stains[1]" alt=" " class="lazy-img">
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    .blue-back {
        background-color: #cbd4d4;
    }
    .yellow-back {
        background-color: #d1cba1;
    }
    .collage {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 150vh;
        padding-bottom: 150px;
    }
    .collage-wrapper {
        width: 70%;
        margin: 50px auto;
    }
    .title {
        position: relative;
        z-index: 10;
        height: 100px;
        line-height: 100px;
        text-align: center;
        margin-bottom: 100px;
        font-size: 3rem;
        h2, h3 {
            color: #fff;
        }
    }
    .flower {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .blocks {
        display: flex;
    }
    .left-block,
    .center-block,
    .right-block {
        width: calc(100% / 3);
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .left-block {
        position: relative;
        left: 4%;
        top: 50px;
        z-index: 1;
    }
    .image-left {
        height: auto;
        width: 100%;
    }
    .left-content {
        padding-right: 10px;
    }
    .left-title {
        font-size: 20px;
        text-transform: uppercase;
        margin: 15px 0 20px 0;
        color: #e23f3f;
    }
    .left-text-content {
        text-transform: uppercase;
        font-size: 18px;
        p {
            color: #fff;
            line-height: 25px;
        }
    }
    .center-block {
        height: 100%;
    }
    .image-center {
        position: relative;
        z-index: 1;
        height: 100%;
    }
    .right-block {
        position: relative;
        margin-left: 20px;
    }
    .right-content {
        height: 40%;
    }
    .right-text {
        margin-bottom: 20px;
        p {
            font-size: 22px;
            color: #fff;
            line-height: 27px;
        }
    }
    .apply-email {

        font-size: 20px;
        margin: 15px 0 20px 0;
        cursor: pointer;
        a {
            color: #e23f3f;
            text-decoration: underline;
        }
    }
    .image-right {
        position: relative;
        right: 25%;
        margin-top: 20px;
        height: 60%;
        width: 100%;
        z-index: 10;
    }
    .stain-left {
        position: absolute;
        top: -13%;
        left: 12%; 
        z-index: -1;
        width: 100%;
        height: auto;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    .stain-right {
        position: absolute;
        bottom: -18%;
        right: 15%; 
        z-index: 1;
        width: 40%;
        height: auto;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
</style>
