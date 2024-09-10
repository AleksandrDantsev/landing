<script lang="ts" setup>

    defineProps<{pageLoaded: boolean}>();

</script>

<template>
    <div class="loading-page" :class="!pageLoaded ? 'loadingAnimationAppear' : 'loadingAnimationDisappear'">
        <div class="loading-page-wrapper">
            <span class="content-loader">
                Soin
                <div class="loader-content-anim" v-if="!pageLoaded"></div>
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .loading-page {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999999;
        transition-duration: 1500ms;
        opacity: 0;
        visibility: hidden;
        background-color: #fff;
    }
    .loading-page-wrapper {
        span {
            text-transform: uppercase;
            display: inline-block;
            position: relative;
            font-size: 2.3rem;
            color: #c76f9bd5;
            letter-spacing: 2px;
            animation: loadingAnimDisappear ease-in 100ms forwards 900ms;
        }
    }
    .loader-content-anim {
        position: absolute;
        background-color: #ffffff;
        top: 0;
        width: 100%;
        bottom: 0;
        transition-duration: 1300ms;
        animation: laodTextAnimation 2000ms ease forwards 100ms infinite;
        box-shadow: -25px 0 25px 0 #ffffffcb;
    }
    .loadingAnimationAppear {
        animation: loadingAnimationAppear ease 2900ms forwards;
    }
    .loadingAnimationDisappear {
        animation: loadingAnimDisappear ease-in 400ms forwards;
    }

    @keyframes loadingAnimationAppear {
        from {
            opacity: 0;
            visibility: hidden;
        }
        to {
            opacity: 1;
            visibility: visible;
        }
    }
    @keyframes loadingAnimDisappear {
        from {
            visibility: visible;
            opacity: 1;
        }
        from {
            opacity: 0 !important;
            visibility: hidden !important;
        }

    }
    @keyframes laodTextAnimation {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(130%);
        }
    }
</style>