<script lang="ts" setup>

</script>

<template>
    <header class="header">
        <div class="logo"><NuxtLink activeClass="active-link" to="/">Cure</NuxtLink></div>
        <nav class="navigation">
            <ul class="navigation-list">
                <li><NuxtLink activeClass="active-link" to="/menus">Menus</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/about">About & Careers</NuxtLink></li>
                <li><NuxtLink activeClass="active-link" to="/contacts">Contact Us</NuxtLink></li>
            </ul>
        </nav>
        <div class="link-to-books">
            <NuxtLink activeClass="active-link" to="/books">Book an Appointment</NuxtLink>
        </div>
    </header>
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
        padding-left: 40px;
        justify-content: space-around;
    }
    .active-link {
        color: green !important;
    }
    .logo {
        font-size: 30px;
        color: $color-header-text;
    }
    .link-to-books {
    
    }
</style>