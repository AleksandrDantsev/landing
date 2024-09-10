<script lang="ts" setup>
    import Banner from '~/components/parts/Banner/Banner.vue';
    import SwitcherPage from '~/components/parts/SwitcherPage/SwitcherPage.vue';
    import { bannerDataService } from '~/data/bannersData';
    import SplitImageView from '~/components/parts/SplitImageView/SplitImageView.vue';
    import WaxMenu from '~/components/parts/WaxMenu/WaxMenu.vue';
    import { useSetTilte } from "~/composable/useSetTitle";

    useSetTilte("Soin - Waxing");

</script>

<template>
    <div class="wrapper-waxing">
        <Banner :content="bannerDataService" />
        <SwitcherPage />
        <SplitImageView :images="['/small_img/img-mood-4_s.webp', '/small_img/img-mood-23_s.webp']"/>
        <WaxMenu />
    </div>
</template>

<style lang="scss" scoped>
</style>