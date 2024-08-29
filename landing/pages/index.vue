<script setup lang="ts">
  import Banner from "../components/single-use/Banner/Banner.vue";
  import ThreeImageBlock from "../components/Parts/ThreeImageBlock/ThreeImageBlock.vue"
  import DoubleImage from "../components/Parts/DoubleImage/DoubleImage.vue";
  import TellingBlock from "../components/Parts/TellingBlock/TellingBlock.vue";

  const tellingMainPage = {
        mainIMG: "/Img_2.webp",
        titleTop: "Clean is the culture.",
        titleBottom: "Cure is the name.",
        text: `We focus on what others don’t: your health & your happiness.Cure uses hospital grade sanitation methods, including sterilizing all metal tools used in services in our Autoclave and offering customers the option to take all single use tools home after each service.`,
        images: ["/img-clean-2_2x.webp", "/img-clean-1_2x.webp"]
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

</script>

<template>
  <div>
    <Banner />
    <ThreeImageBlock :content="greatingBlockMainPage" />
    <DoubleImage :image="['/img-mood-3.jpg', 'img-mood-2.webp']"/>
    <TellingBlock :content="tellingMainPage" />
    <DoubleImage :image="['/img-mood-2-2.webp', 'img-mood-2-1.webp']"/>
  </div>
</template>

<style lang="scss" scoped>

</style>