<script lang="ts" setup>
    import cross from "~/assets/svg/cross.svg";

    interface Props {
        backColor: string;
        openMenu: boolean;
        openOrCloseMenu: () => void;
    }

    defineProps<Props>();

</script>

<template>
    <div class="mobile-menu" :class="{'close-menu': !openMenu}" :style="{'background-color': backColor}">
        <div class="mobile-menu-wrapper">
            <div class="close-button-wrap" v-if="openMenu">
                <button class="close-button" @click="openOrCloseMenu">
                    <img :src="cross" alt="Close">
                </button>
            </div>
            <ul @click="openOrCloseMenu">
                <li><NuxtLink activeClass="active-link" to="/">Home</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/menus/nails">Menus</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/about">About & Careers</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/contacts">Contact Us</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .close-menu {
        opacity: 0;
        visibility: hidden;
        z-index: -1;
    }

    .mobile-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition-duration: 400ms;
        background-color: #cbd4d4;
        z-index: 99999999;
    }
    .mobile-menu-wrapper {
        width: 40%;
        ul {
            width: 100%;
            li {
                padding: 5px 0;
                margin: 10px 0;
                font-size: 2rem;
                text-align: center;
                a {
                    color: #fff;
                }
            }
        }
    }
    .active-link {
        border-bottom: solid 2px #fff;
        &:hover::before {
            display: none;
        }
    }
    .close-button-wrap {
        position: absolute;
        top: 12px;
        right: 23px;
    }
    .close-button {
        cursor: pointer;
        img {
            transition-duration: 500ms;
            &:hover {
                transform: rotate(90deg);
            }
        }
    }
    
    @media (max-width: 550px) {
        .mobile-menu-wrapper {
            width: 90%;
        }
    }
</style>