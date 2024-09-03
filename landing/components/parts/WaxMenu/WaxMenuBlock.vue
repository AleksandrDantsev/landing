<script lang="ts" setup>
    interface Props {
        data: {
            title: string;
            procedures: string[][];
        };
    }

    defineProps<Props>();

</script>

<template>
    <div class="wax-menu-block">
        <div class="wax-menu-block-title">
            <h3>{{ data.title }}</h3>
        </div>
        <div class="wax-menu-block-prices-list">
            <ul>
                <li v-for="procedure in data.procedures" :key="procedure[0]">
                    <div class="line-price">
                        <div class="name">
                            <h6>{{ procedure[0] }}</h6>
                            <div class="inscription" v-if="procedure[2]">{{ procedure[2] }}</div>
                        </div>
                    </div>
                    <div class="cost">{{ procedure[1] }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wax-menu-block {
        margin: 50px;
        flex-grow: 1;
        min-width: calc(100% / 4);
        max-width: calc(100% / 4);
    }
    .wax-menu-block-title {
        margin: 15px 0 50px 0;
        font-size: 2.5rem;
    }
    .wax-menu-block-prices-list {
        li {
            display: flex;
            justify-content: space-between;
            padding: 14px 0;
        }
    }
    .line-price {
    }
    .name {
        position: relative;
        font-size: 1.3rem;
    }
    .cost {
        font-size: 1.2rem;
    }
    .inscription {
        position: absolute;
        font-size: 1rem;
        color: #db3838;
        bottom: -18px;
    }
</style>