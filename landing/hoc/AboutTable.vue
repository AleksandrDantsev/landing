<script lang="ts" setup>
    import { greatingAboutPage } from "~/data/greatingBlockData";
    import ThreeImageBlock from "../components/parts/ThreeImageBlock/ThreeImageBlock.vue"

</script>

<template>
    <div class="about-us">
        <ThreeImageBlock :content="greatingAboutPage">
            <div class="addition-block">
                <div class="addition-block-wrapper">
                    <div class="text">
                        <div class="text-title">
                            <h3>Our aim is to deliver a distinctive nail and wax experience, emphasizing the care of both nails and the surrounding skin with the use of environmentally-conscious products.</h3>
                        </div>
                        <div class="text-content">
                            <p>We are a one-of-a-kind  boutique offering a personalized menu, featuring our own handcrafted natural and organic skincare products used in all our treatments.</p>
                        </div>
                    </div>
                    <div class="image">
                        <img class="dots-stain-back lazy-img" src="/back_images/grey-green-group.png" alt=" " />
                        <img src="/small_img/img-section-1-1_s.webp" alt=" " class="lazy-img" />
                    </div>
                </div>
            </div>
        </ThreeImageBlock>
    </div>
</template>

<style lang="scss" scoped>
    .addition-block {
        width: 100%;
    }
    .addition-block-wrapper {
        display: flex;
        justify-content: space-evenly;
        width: 61%;
        margin: 40px auto 0 auto;
    }
    .text {
        width: 65%;
        padding-right: 25px;
    }
    .text-title {
        margin-bottom: 30px;
        h3 {
            color: #fff;
            font-size: 1.1rem;
            line-height: 1.5rem;
            text-transform: uppercase;
        }
    }
    .text-content {
        p {
            color: #474747;
            font-size: 1.1rem;
            line-height: 1.3rem;
        }
    }
    .image {
        position: relative;
        width: 35%;
        img {
            width: 100%;
            object-fit: contain;
            height: 100%;
            transform: translateX(25%)
        }
    }
    .dots-stain-back {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -30%;
        left: 40%;
        z-index: -1;
    }

    @media (max-width: 850px) {
        .addition-block-wrapper {
            position: relative;
            z-index: 50;
        }
        .image {
            width: 55%;
        }
        .dots-stain-back {
            top: -20%;
        }
    }
    @media (max-width: 650px) {
        .addition-block-wrapper {
            width: 80%;
        }
        .text {
            width: 50%;
        }
        .image {
            width: 50%;
            img {
                transform: unset;
            }
        }
        .dots-stain-back {
            display: none;
        }
        .addition-block-wrapper {
            width: 92%;
        }
    }
    @media (max-width: 650px) {
        .text {
            width: 100%;
        }
        .image {
            display: none;
        }
    }
</style>
