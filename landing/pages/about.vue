<script lang="ts" setup>
    import AboutTable from "~/hoc/AboutTable.vue";
    import TellingBlock from "~/components/parts/TellingBlock/TellingBlock.vue";
    import Collage from "~/components/parts/Collage/Collage.vue";
    import { tellingAboutPage, careersData } from "~/data/aboutPagesData";
    import { useSetTilte } from "~/composable/useSetTitle";

    useSetTilte("Soin - About Us");

</script>

<template>
    <div class="about-us">
        <AboutTable />
        <TellingBlock :content="tellingAboutPage"/>
        <Collage :content="careersData" />
    </div>
</template>

