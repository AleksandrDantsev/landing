<script lang="ts" setup>
    import Banner from '~/components/parts/Banner/Banner.vue';
    import DoubleImage from '~/components/parts/DoubleImage/DoubleImage.vue';
    import SwitcherPage from '~/components/parts/SwitcherPage/SwitcherPage.vue';
    import SinglePhoto from '~/components/parts/SinglePhoto/SinglePhoto.vue';
    import FramePhoto from '~/components/parts/FramePhoto/FramePhoto.vue';
    import { singleFacialData } from '~/data/singleCardData';

    const bannerDataMenus = {
        image: "/Img_hero.webp",
        text: "Our Services",
    }

    const frameDataFacial = {
        image: "/Img_introducing.webp",
        text: ["Introducing", "for everyday", "and everyone!"],
        backgroundColorLeft: "gray-back",
        backgroundColorRight: "blue-back",
    };

</script>

<template>
    <Banner :content="bannerDataMenus" />
    <SwitcherPage />
    <SinglePhoto :content="singleFacialData" />
    <DoubleImage :image="['/Img_mood_1.webp', '/Img_mood_2.webp']"/>
    <FramePhoto :content="frameDataFacial" />
</template>

<style lang="scss" scoped>
</style>