<script lang="ts" setup>
    import { pricesNails } from '~/data/pricesNails';

</script>

<template>
    <article class="price-list">
        <div class="color-wide-line"></div>
        <div class="title"><h2>Choose your style.</h2></div>
        <div class="price-list-wrapper">
            <div class="list">
                <div class="list-wrapper">
                    <div class="column">
                        <div class="title-column">
                            <h5>STYLE</h5>
                            <h5>Manicure or pedicure</h5>
                        </div>
                    </div>
                    <div class="main-column">
                        <div class="line-price" v-for="price in pricesNails" :key="price.name">
                            <div class="left-column">
                                <h3 class="name-price">
                                    {{ price.name }}
                                </h3>
                                <div class="explanation-name">
                                    <p>{{ price.explanation }}</p>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="price-now costs"><span>{{ price.cost[0] }}</span></div>
                                <div class="price-before costs"><span>{{ price.cost[1] }}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    .price-list {
        position: relative;
        z-index: 1;
        padding: 150px 0;
        background-color: #e9e9e9;
    }
    .color-wide-line {
        position: absolute;
        height: 500px;
        width: 100%;
        z-index: 2;
        top: 0;
        background-color: #697e5b;
    }
    .price-list-wrapper {
        position: relative;
        width: 80%;
        margin: 20px auto;
        z-index: 5;
        background-color: #ffffff;
    }
    .title {
        position: relative;
        z-index: 10;
        text-align: center;
        margin-bottom: 60px;
        h2 {
            color: #fff;
            font-size: 3.3rem;
        }
    }
    .list {
        display: flex;
        width: 100%;
        
    }
    .list-wrapper {
        width: 80%;
        margin: 50px auto;
    }
    .column {

    }
    .title-column {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        h5 {
            text-transform: uppercase;
            color: #c42d2d;
            font-size: 12px;
        }
    }
    .main-column {
        
    }
    .costs {
        display: flex;
        align-items: center;
        span {
            font-size: 1.6rem;
        }
    }
    .line-price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
    }
    .left-column {
        padding-right: 30px;
    }
    .name-price {
        font-size: 2.2rem;
        margin-bottom: 20px;
    }
    .explanation-name {
        margin-bottom: 10px;
        font-size: 1.1rem;
        padding-right: 15px;
        p {
            color: #c42d2dd3;
        }
    }
    .right-column {
        display: flex;
    }
    .price-now {
        margin-right: 50px;
    }
    .price-before {
        span {
            font-size: 1.4rem;
            color: #c42d2da9;
        }
    }

    @media (max-width: 750px) {
        .name-price {
            font-size: 2rem;
        }
        .explanation-name {
           p {
            font-size: 1rem;
           } 
        }
    }
    @media (max-width: 650px) {
        .price-list-wrapper {
            width: 90%;
        }
        .list-wrapper {
            width: 90%;
        }
        .price-now, 
        .price-before {
            span {
                font-size: 1.3rem;
            }
        }
    }
    @media (max-width: 400px) {
        .name-price {
            font-size: 1.8rem;
        }
        .explanation-name {
           p {
            font-size: 0.8rem;
           } 
        }
    }
</style>