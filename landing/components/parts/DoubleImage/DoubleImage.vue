<script setup lang="ts">

interface Props {
    image: string[];
}


const props = defineProps<Props>();

</script>

<template>
    <div class="images-block">
        <div class="image-content">
            <img :src="image[0]" alt="#">
        </div>
        <div class="image-content">
            <img :src="image[1]" alt="#">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .images-block {
        display: flex;
        width: 100%;
        height: 110vh;
    }
    .image-content {
        width: 50%;
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
</style>