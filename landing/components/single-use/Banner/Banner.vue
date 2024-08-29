<script lang="ts" setup>

</script>

<template>
    <div class="banner">
        <div class="banner-image"></div>
        <div class="banner-greating">
            <h2 class="banner-greating-text">Build your owntype of nail, wax & facial boutique</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        height: 100vh;
    }
    .banner-image {
        width: 100%;
        height: 100%;
        background: url('banner.webp') no-repeat center center / cover;;
    }
    .banner-greating {
        position: absolute;
        font-size: 3rem;
        top: 50%;
        left: 0;
        right: 0;
        text-align: center;
        transform: translate3d(0, -50%, 0);
    }
    .banner-greating-text {
        color: #ffffff;
    }
</style>