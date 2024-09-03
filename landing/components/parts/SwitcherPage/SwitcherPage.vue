<script lang="ts" setup>
    const pageData = [
        { namePage: "Facial", link: "/menus/facial" },
        { namePage: "Nails", link: "/menus/nails" },
        { namePage: "Waxing", link: "/menus/waxing" },
    ];

</script>

<template>
    <div class="page-navigation-wrapper">
        <nav class="page-navigation-inner"> 
            <ul>
                <li v-for="page in pageData" :key="page.link">
                    <NuxtLink :to="page.link" activeClass="active-link">
                        <span class="text-link-page">{{ page.namePage }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

    $heightSwitcher: 60px;

    .page-navigation-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 90;
    }
    .page-navigation-inner {
        position: absolute;
        height: 100%;
        width: 50%;
        bottom: $heightSwitcher / 2 * -1;
        background-color: #fff;
        height: $heightSwitcher;
        max-width: 800px;
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            li {
                display: block;
                width: 100%;
                height: 100%;
                text-align: center;
            }
        }
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            transition-duration: 700ms;
            border-bottom: solid 2px transparent;
            &:hover {
                border-bottom: solid 2px #e70000;
            }
            &:hover .text-link-page {
                color: #be2020;
            }
        }
        .text-link-page {
            color: #6d6d6d;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.6rem;
            transition-duration: 500ms;
        }
        .active-link {
            border-bottom: solid 2px #e70000;
        }
    }
</style>