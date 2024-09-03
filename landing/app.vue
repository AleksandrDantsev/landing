<script lang="ts" setup>
    import '@/assets/styles/reset.css';
    import '@/assets/styles/normalize.css';
    import Header from "./components/layout/Header/Header.vue";
    import Footer from "./components/layout/Footer/Footer.vue";
    import { useGsapScroll } from './composable/useGsapScroll';
    import { gsapAnimationData } from './data/gsapAnimation';

    useGsapScroll(gsapAnimationData);

</script>

<template>
    <div id="scroll-container">
        <Header />
        <NuxtPage />
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
  
</style>

