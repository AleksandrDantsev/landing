<script lang="ts" setup>
    import WaxMenuBlock from './WaxMenuBlock.vue';
    import { pricesWaxProcedure } from '~/data/costsWaxing';


</script>

<template>
    <article class="wax-menu gray-back">
        <div class="wax-menu-conteiner">
            <div class="wax-menu-title">
                <h2>Wax Menu</h2>
            </div>
            <div class="wax-menu-list-wrapper">
                <div class="wax-menu-list">
                    <WaxMenuBlock v-for="procedure in pricesWaxProcedure" 
                        :key="procedure.title"
                        :data="procedure" 
                    />
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>

    .gray-back {
        background-color: #e2d8cc;
    }
    .wax-menu {
        width: 100%;
        padding: 100px 0;
    }
    .wax-menu-conteiner {
        width: 90%;
        margin: 0 auto
    }
    .wax-menu-title {
        text-align: center;
        margin: 40px 0;
        h2 {
            font-size: 3rem;
        }
    }
    .wax-menu-list-wrapper {
    }
    .wax-menu-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    @media (max-width: 600px) {
        .wax-menu-block {
            width: 100%;
            max-width: unset;
        }
    }
</style>