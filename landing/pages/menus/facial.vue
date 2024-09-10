<script lang="ts" setup>
    import Banner from '~/components/parts/Banner/Banner.vue';
    import DoubleImage from '~/components/parts/DoubleImage/DoubleImage.vue';
    import SwitcherPage from '~/components/parts/SwitcherPage/SwitcherPage.vue';
    import SinglePhoto from '~/components/parts/SinglePhoto/SinglePhoto.vue';
    import FramePhoto from '~/components/parts/FramePhoto/FramePhoto.vue';
    import { singleFacialData } from '~/data/singleCardData';
    import { bannerDataService } from '~/data/bannersData';
    import { useSetTilte } from "~/composable/useSetTitle";

    useSetTilte("Soin - Facial");

    const frameDataFacial = {
        image: "/small_img/Img_introducing_s.webp",
        text: ["Introducing", "for everyday", "and everyone!"],
        backgroundColorLeft: "gray-back",
        backgroundColorRight: "blue-back",
    };

</script>

<template>
    <Banner :content="bannerDataService" />
    <SwitcherPage />
    <SinglePhoto :content="singleFacialData" />
    <DoubleImage :image="['/small_img/Img_mood_s.webp', '/small_img/mood_s.webp']"/>
    <FramePhoto :content="frameDataFacial" />
</template>
