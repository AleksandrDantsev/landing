<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MobileMenu from '~/components/parts/MobileMenu/MobileMenu.vue';
import burger from "~/assets/svg/burger.svg";

const backColor = ref("rgb(203, 212, 212)");
const isOpenMobileMenu = ref(false);

onMounted(() => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('article');
    const footer =  document.querySelector('footer');
    
    if (header && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const backgroundColor = window.getComputedStyle(entry.target).backgroundColor;

                    if (backgroundColor === "rgba(0, 0, 0, 0)") backColor.value = "rgb(203, 212, 212)";
                    else backColor.value = backgroundColor;

                    header.style.backgroundColor = backgroundColor;
                }
                });
        }, { threshold: 0.6 });
      
        sections.forEach(section => observer.observe(section));
        if (footer) observer.observe(footer);
    }    
})

const openOrCloseMenu = () => {
    isOpenMobileMenu.value = !isOpenMobileMenu.value;
}


</script>

<template>
    <header class="header">
        <div class="logo"><NuxtLink to="/">Soin</NuxtLink></div>
        <nav class="navigation">
            <ul class="navigation-list">
                <li><NuxtLink activeClass="active-link" to="/menus/nails">Menus</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/about">About & Careers</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/contacts">Contact Us</NuxtLink></li>
            </ul>
        </nav>
        <div class="link-to-books">
            <NuxtLink to="/books">Book an Appointment</NuxtLink>
        </div>
        <div class="menu-burger" @click="openOrCloseMenu" v-if="!isOpenMobileMenu">
            <button class="menu-burger-button">
                <img :src="burger" alt="Menu">
            </button>
        </div>
    </header>
    <MobileMenu 
    :back-color="backColor" 
    :open-menu="isOpenMobileMenu"
    :open-or-close-menu="openOrCloseMenu" />
</template>

<style lang="scss" scoped>
     $color-header-text: #ffffff;

    .header {
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 70px;
        line-height: 70px;
        padding: 0 60px;
        z-index: 9999999;
        transition-duration: 900ms;
        a {
            color: $color-header-text;
        }
    }
    .navigation {
        width: 40%;
    }
    .navigation-list {
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 40px;
        justify-content: space-around;
        li {
            position: relative;
            height: min-content;
            margin: 0 10px;
        }
        a {
            position: relative;
            padding: 5px 0;
            font-size: 15px;
            &::before {
            content: "";            
            position: absolute;      
            left: 50%;            
            bottom: -2px;
            width: 0;                
            height: 1px;           
            background-color: #fff;
            transition: width 0.2s ease-out, left 0.2s ease-out; 
        }
        &:hover::before {
            left: 0;              
            width: 100%;  
        }
        }
    }
    .active-link {
        border-bottom: solid 1px #fff;
        &:hover::before {
            display: none;
        }
    }
    .logo {
        font-size: 35px;
        color: $color-header-text;
    }
    .link-to-books {
        font-size: 15px;
        font-weight: bold;
    }
    .menu-burger-button {
        cursor: pointer;
    }
    .menu-burger {
        display: flex;
        align-items: center;
        justify-content: center
    }
    @media (max-width: 1050px) {
        .navigation {
            width: 60%;
        }
    }
    @media (min-width: 850px) {
        .menu-burger {
            display: none;
        } 
    }
    @media (max-width: 850px) {
        .navigation {
            display: none;
        }
        .link-to-books {
            display: none;
        }
        .menu-burger {
            display: flex;
        } 
        .header {
            padding: 0 30px;
        }
    }
</style>