<script setup lang="ts">
  import { tellingMainPage } from "~/data/tellingBlockData";
  import { greatingBlockMainPage } from "~/data/greatingBlockData";
  import { servicesData } from "~/data/servicesData"
  import { bannerDataMenus } from "~/data/bannersData";
  import { singleMainData } from "~/data/singleCardData";
  import { sliderMainPage } from "~/data/productsData";
  import { mainPageSlides } from "~/data/sliderData";

  import Banner from "~/components/parts/Banner/Banner.vue";
  import ThreeImageBlock from "../components/parts/ThreeImageBlock/ThreeImageBlock.vue"
  import DoubleImage from "../components/parts/DoubleImage/DoubleImage.vue";
  import TellingBlock from "../components/parts/TellingBlock/TellingBlock.vue";
  import Collage from "~/components/parts/Collage/Collage.vue";
  import SinglePhoto from "~/components/parts/SinglePhoto/SinglePhoto.vue";
  import ProductsSliderMain from "~/components/parts/ProductsSliderMain/ProductsSliderMain.vue";

</script>

<template>
  <main>
    <Banner :content="bannerDataMenus"/>
    <ThreeImageBlock :content="greatingBlockMainPage" />
    <DoubleImage :image="['/small_img/img-mood-3_s.webp', '/small_img/img-mood-2_s.webp']"/>
    <TellingBlock :content="tellingMainPage" />
    <Collage :content="servicesData" />
    <DoubleImage :image="['/small_img/img-mood-2-2_s.webp', '/small_img/img-mood-2-1_s.webp']"/>
    <ProductsSliderMain :slides-data="mainPageSlides" 
                        :title="sliderMainPage.title" 
                        :description="sliderMainPage.description" 
                        :start-link-slider="true" />
    <SinglePhoto :content="singleMainData" />
  </main>
</template>

<style lang="scss" scoped>

</style>