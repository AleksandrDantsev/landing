<script setup lang="ts">
  import Banner from "~/components/parts/Banner/Banner.vue";
  import ThreeImageBlock from "../components/parts/ThreeImageBlock/ThreeImageBlock.vue"
  import DoubleImage from "../components/parts/DoubleImage/DoubleImage.vue";
  import TellingBlock from "../components/parts/TellingBlock/TellingBlock.vue";
  import Collage from "~/components/parts/Collage/Collage.vue";

    const tellingMainPage = {
            mainIMG: "/Img_2.webp",
            titleTop: "Clean is the culture.",
            titleBottom: "Cure is the name.",
            text: `We focus on what others don’t: your health & your happiness.Cure uses hospital grade sanitation methods, including sterilizing all metal tools used in services in our Autoclave and offering customers the option to take all single use tools home after each service.`,
            images: ["/img-clean-2_2x.webp", "/img-clean-1_2x.webp"],
            colorBackClass: "blue-back",
        };

    const greatingBlockMainPage = {
                titles: ["Hi, meet", "Cure"],
                textContent: {
                    textClass: "main-page-text", 
                    text: `A customizable, natural product-based, nail & wax boutique focused on you`
                },
                images: ["/img-hi-1_2x.webp", "/img-hi-2_2x.webp", ],
                stainsImages: ["/grey-green-group.png", "/hand.png", ],
                backgroundColorClass: "gray-back",
            };

    const servicesData = {
        nameBlock: "Our Services",
        backColorClass: "yellow-back",
        block1: {image: "/img-our-services-1_2x.webp", title: null, text: null},
        block2: {image: "/img-our-services-2_2x.webp"},
        block3: {image: "/img-our-services-3_2x.webp", text: "Nails. Wax.", link: "/menus", nameLink: "See Our Menu"},
        stains: ["green-dots-top.png", "dots.png"],
    };

    const bannerData = {
        image: "/banner.webp",
        text: "Build your owntype of nail, wax & facial boutique",
    }

</script>

<template>
  <div>
    <Banner :content="bannerData"/>
    <ThreeImageBlock :content="greatingBlockMainPage" />
    <DoubleImage :image="['/img-mood-3.jpg', 'img-mood-2.webp']"/>
    <TellingBlock :content="tellingMainPage" />
    <Collage :content="servicesData" />
    <DoubleImage :image="['/img-mood-2-2.webp', 'img-mood-2-1.webp']"/>
  </div>
</template>

<style lang="scss" scoped>

</style>