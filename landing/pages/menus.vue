<script lang="ts" setup>
    import Banner from '~/components/parts/Banner/Banner.vue';
    import DoubleImage from "../components/parts/DoubleImage/DoubleImage.vue";

    const bannerDataMenus = {
        image: "/Img_hero.webp",
        text: "Our Services",
    }

</script>

<template>
    <Banner :content="bannerDataMenus" />
    <DoubleImage :image="['/img-mood-2-12.webp', 'img-mood-1.webp']"/>
</template>

<style lang="scss" scoped>

</style>