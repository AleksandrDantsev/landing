<script lang="ts" setup>

</script>

<template>
    <header class="header">
        <div class="logo"><NuxtLink to="/">Cure</NuxtLink></div>
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
        z-index: 9999999;
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
          
        }
        a {
            position: relative;
            padding: 5px 0;
            font-size: 17px;
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
    
    }
</style>