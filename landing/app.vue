<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import '@/assets/styles/reset.css';
import '@/assets/fonts/fonts.css';
import '@/assets/styles/normalize.css';
import Header from './components/layout/Header/Header.vue';
import Footer from './components/layout/Footer/Footer.vue';
import { useRouter } from 'vue-router';
import LoaderSite from './components/parts/LoaderSite/LoaderSite.vue';
import { useSetTilte } from './composable/useSetTitle';


const pageLoaded = ref(false);
const router = useRouter();

useSetTilte("Soin - Design your own distinctive nail, wax & facial studio");

onMounted(() => {
    const onLoad = () => {
        pageLoaded.value = true;
        window.removeEventListener('load', onLoad);
    };

    if (document.readyState === 'complete') {
        onLoad();
    } else {
        window.addEventListener('load', onLoad);
    }
});


router.beforeEach((to, from, next) => {
    pageLoaded.value = false;
    next();
});

router.afterEach(() => {
    setTimeout(() => pageLoaded.value = true, 1500); 
});



</script>

<template>
    <LoaderSite :page-loaded="pageLoaded"/>
    <div v-if="pageLoaded" >
        <Header />
        <NuxtPage />
        <Footer />
    </div>
</template>


<style lang="scss" scoped>
    
</style>

