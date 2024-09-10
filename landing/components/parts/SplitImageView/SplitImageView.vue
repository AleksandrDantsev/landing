<script lang="ts" setup>

    defineProps<{ images: string[] }>()

</script>

<template>
    <article class="split-image-view gray-back">
        <div class="left-image-container">
            <img :src="images[0]" alt="" class="left-image lazy-img">
        </div>
        <div class="right-image-container">
            <div class="right-image-wrapper">
                <img :src="images[1]" alt="" class="right-image lazy-img">
                <img src="/back_images/blue-dots-big-right.png" alt="" class="stain lazy-img">
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>

    .gray-back {
        background-color: #e2d8cc;
    }

    .split-image-view {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 200px 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .left-image-container {
        width: 50%;
        height: 100%;
    }
    .right-image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
    }
    .right-image-wrapper {
        position: relative;
        width: 60%;
        height: 60%;
    }
    .right-image {
        position: relative;
        z-index: 20;
    }
    .stain {
        position: absolute;
        width: 150px;
        height: 150px;
        bottom: -30%;
        right: -30%;
    }

    @media (max-width: 750px) {
        .split-image-view {
            padding: 120px 0;
            flex-direction: column-reverse;
        }
        .right-image-container {
            width: 80%;
            margin-bottom: 50px;
        }
        .left-image-container {
            width: 100%;
            z-index: 90;
        }
        .stain {
            bottom: 50px;
        }
    }
    @media (max-width: 450px) {
        .split-image-view {
            padding-bottom: 0;
        }
    }
</style>