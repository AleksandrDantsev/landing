<script setup lang="ts">
    import ContactsBlockList from './ContactsBlockList.vue';
    import { addressLinks } from '~/data/addressLinks';

</script>

<template>
    <article class="contacts-block">
        <div class="contacts-block-wrapper">
            <ContactsBlockList v-for="address in addressLinks" :key="address.titleOfList" :content="address"/>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    .contacts-block {
        width: 100%;
        padding: 100px 0;
        background-color: #e3d8e7;
    }
    .contacts-block-wrapper {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
    }
    .contacts-block-list {
        margin:  30px 15px;
    }

    @media (max-width: 850px) {
        .contacts-block-wrapper {
            flex-wrap: wrap;
        }
    }
    @media (max-width: 500px) {
        .contacts-block-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    }
</style>