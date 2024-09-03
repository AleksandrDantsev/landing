<script lang="ts" setup>
    import Banner from '~/components/parts/Banner/Banner.vue';
    import SwitcherPage from '~/components/parts/SwitcherPage/SwitcherPage.vue';
    import { bannerDataMenus } from '~/data/bannersData';
    import SplitImageView from '~/components/parts/SplitImageView/SplitImageView.vue';
    import WaxMenu from '~/components/parts/WaxMenu/WaxMenu.vue';

</script>

<template>
    <div class="wrapper-waxing">
        <Banner :content="bannerDataMenus" />
        <SwitcherPage />
        <SplitImageView />
        <WaxMenu />
    </div>
</template>

<style lang="scss" scoped>
</style>