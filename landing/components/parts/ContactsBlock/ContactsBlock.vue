<script setup lang="ts">
    import ContactsBlockList from './ContactsBlockList.vue';
    import { addressLinks } from '~/data/addressLinks';

</script>

<template>
    <div class="contacts-block">
        <div class="contacts-block-wrapper">
            <ContactsBlockList v-for="address in addressLinks" :key="address.titleOfList" :content="address"/>
        </div>
    </div>
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
</style>