<script lang="ts" setup>
    import AboutTable from "~/hoc/AboutTable.vue";
    import TellingBlock from "~/components/parts/TellingBlock/TellingBlock.vue";
    import Collage from "~/components/parts/Collage/Collage.vue";

    const tellingAboutPage = {
        mainIMG: "/img-section-2-1.webp",
        titleTop: "We provide only the best of organic and natural",
        titleBottom: "skin care products.",
        text: `We focus on what others don’t: your health & your happiness.Cure uses hospital grade sanitation methods, including sterilizing all metal tools used in services in our Autoclave and offering customers the option to take all single use tools home after each service.`,
        images: [],
        colorBackClass: "purple-back",
    };

    const careersData = {
            nameBlock: "Careers",
            backColorClass: "blue-back",
            block1: {image: "/img-careers-1_2x.webp", title: "Now Hiring", text: "Nail Technicians & Waxing Specialists of all levels."},
            block2: {image: "/img-careers-2_2x.webp"},
            block3: {image: "/img-careers-3_2x.webp", text: "Please send us an email telling us a bit about yourself. Oh…and attach your resume.", link: "mailto:wena@gmail.com", nameLink: "Apply Now"},
            stains: ["green-dots-top.png", "dots.png"],
        };


</script>

<template>
    <div class="about-us">
        <AboutTable />
        <TellingBlock :content="tellingAboutPage"/>
        <Collage :content="careersData" />
    </div>
</template>

<style lang="scss" scoped>
  
</style>

