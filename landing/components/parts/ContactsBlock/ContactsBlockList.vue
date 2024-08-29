<script setup lang="ts">

    interface Props {
        content: {
            titleOfList: string;
            linkData: {name: string, link: string | null, animate: true | false}[];
        };
    }

    defineProps<Props>();
</script>

<template>
    <div class="contacts-block-list">
        <h3 class="contact-title">{{ content.titleOfList  }}</h3>
        <ul class="contact-list-links">
            <li v-for="row in content.linkData" :key="row.name"><NuxtLink :to="row.link">{{ row.name }}</NuxtLink></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    $colorText: #3d3d3d;

    .contact-title {
        margin-bottom: 25px;
        font-size: 22px;
        font-weight: 600;
        color: $colorText;
    }
    .contact-list-links {
        font-size: 18px;
        li {
            padding: 10px 0;
            a {
                color: $colorText;
            }
        }
    }
</style>