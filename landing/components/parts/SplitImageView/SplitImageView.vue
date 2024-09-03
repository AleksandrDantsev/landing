<script lang="ts" setup>


</script>

<template>
    <div class="split-image-view gray-back">
        <div class="left-image-container">
            <img src="/img-mood-4.webp" alt="" class="left-image">
        </div>
        <div class="right-image-container">
            <div class="right-image-wrapper">
                <img src="/img-mood-23.webp" alt="" class="right-image">
                <img src="/blue-dots-big-right.png" alt="" class="stain">
            </div>
        </div>
    </div>
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
    .left-image {

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
</style>