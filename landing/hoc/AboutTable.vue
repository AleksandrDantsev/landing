<script lang="ts" setup>
    import ThreeImageBlock from "../components/parts/ThreeImageBlock/ThreeImageBlock.vue"


    const greatingContactUsPage = {
            titles: ["It’s simple.", "Cure is responsible, different", "and exciting."],
            titlesFontSize: "title-size-middle",
            textContent: {
                textClass: "about-us-page-text", 
                text: `Cure was founded in 2018 in El Paso, Texas. At Cure we focus on customer experience, health and happiness.`
            },
            images: ["/img-section-1-2_2x.webp", "/img-section-1-3.webp"],
            stainsImages: ["/grey-dots-big.png", null, "red-dots-bottom.png"],
            backgroundColorClass: "blue-back",
        };


</script>

<template>
    <div class="about-us">
        <ThreeImageBlock :content="greatingContactUsPage">
            <div class="addition-block">
                <div class="addition-block-wrapper">
                    <div class="text">
                        <div class="text-title">
                            <h3>Our goal is to provide El Paso a different type of nail & wax experience, one focused on nails and the skin around the nail by using responsible products.</h3>
                        </div>
                        <div class="text-content">
                            <p>We are a unique nail and wax boutique that curated a build-your-own style menu by creating its own natural and organic skincare products that are used in services.</p>
                        </div>
                    </div>
                    <div class="image">
                        <img class="dots-stain-back lazy-img" src="/grey-green-group.png" alt=" ">
                        <img src="/img-section-1-1.webp" alt=" " class="lazy-img">
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
        top: -40%;
        left: 40%;
    }
</style>
