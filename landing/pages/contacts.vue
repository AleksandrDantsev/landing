<script lang="ts" setup>
    import ThreeImageBlock from "../components/parts/ThreeImageBlock/ThreeImageBlock.vue"
    import ContactsBlock from "~/components/parts/ContactsBlock/ContactsBlock.vue";
    import Map from "~/components/parts/Map/Map.vue";


    const greatingContactUsPage = {
            titles: ["Cure is conveniently", "located in", "newest Westside"],
            textContent: {
                textClass: "contuct-us-page-text", 
                text: `Our prime location is situated close to many shops, restaurants and entertainment. If you are not from the Westside, it is well worth it to drive and enjoy the Cure nail and wax experience.`
            },
            images: ["/img-section-1-1_2x.webp", "/img-section-1-2.webp"],
            stainsImages: ["/grey-green-group.png", null, "red-dots-bottom.png"],
            backgroundColorClass: "pink-back",
        };


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

