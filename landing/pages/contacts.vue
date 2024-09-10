<script lang="ts" setup>
    import ThreeImageBlock from "../components/parts/ThreeImageBlock/ThreeImageBlock.vue"
    import ContactsBlock from "~/components/parts/ContactsBlock/ContactsBlock.vue";
    import Map from "~/components/parts/Map/Map.vue";
    import { greatingContactUsPage } from "~/data/greatingBlockData";
    import { useSetTilte } from "~/composable/useSetTitle";

    useSetTilte("Soin - Contact Us");

</script>

<template>
    <div class="contact-us">
        <ThreeImageBlock :content="greatingContactUsPage" />
        <ContactsBlock /> 
        <Map />
    </div>
</template>

<style lang="scss" scoped>
  
</style>

