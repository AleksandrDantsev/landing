<script setup lang="ts">

interface Props {
    content: {
        mainIMG: string,
        titleTop: string,
        titleBottom: string,
        text: string,
        images: [],
    },
}

const props = defineProps<Props>();

</script>

<template>
    <div class="telling-block">
        <div class="main-image-block">
            <img :src="content.mainIMG" alt="#" class="main-image">
        </div>
        <div class="content-block">
            <div class="title-block">
                <h3>{{ content.titleTop }}</h3>
                <h3>{{ content.titleBottom }}</h3>
            </div>
            <div class="info-block">
                <div class="info-block-text">{{ content.text }}</div>
                <div class="info-block-images">
                    <div v-if="content.images[0]" class="image-one">
                        <img :src="content.images[0]" alt="#">
                    </div>
                    <div v-if="content.images[1]" class="image-two">
                        <img :src="content.images[1]" alt="#">
                    </div>
                </div>
            </div>
        </div>
        <div class="color-line"></div>
    </div>
</template>

<style lang="scss" scoped>
    .telling-block {
        position: relative;
        display: flex;
        width: 100%;
        height: 110vh;
        padding: 100px 0;
        z-index: -10;
        background-color: #bfcfcd;
    }
    .main-image-block {
        width: 40%;
        height: 100%;
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
        h3 {
            font-size: 4rem;
            color: #fff;
        }
    }
    .info-block {
        display: flex;
    }
    .info-block-text {
        width: 35%;
        line-height: 20px;
        color: #535353;
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
        height: 130px;
        background-color: #f5f5f5;
        position: absolute;
        z-index: -1;
        bottom: 0;
    }
</style>