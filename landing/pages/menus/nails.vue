<script lang="ts" setup>
    import { ref } from 'vue';
    import Banner from '~/components/parts/Banner/Banner.vue';
    import DoubleImage from '~/components/parts/DoubleImage/DoubleImage.vue';
    import SwitcherPage from '~/components/parts/SwitcherPage/SwitcherPage.vue';
    import PriceList from '~/components/parts/PriceList/PriceList.vue';
    import SwitchTypeNails from '~/hoc/SwitchTypeNails.vue';
    import ProductsSliderMain from '~/components/parts/ProductsSliderMain/ProductsSliderMain.vue';
    import type { TProductSlider } from '~/types/type_products_slider';
    import type { ProductCategory } from '~/data/productsData';
    import { sliderMainPage } from '~/data/productsData';
    import { bannerDataMenus } from '~/data/bannersData';
    import { products } from '~/data/productsData';

    
    const choisenCategoryProd = ref<TProductSlider>(products.all);
    const nameCategory = ref<string>('');


    const changeCategoryProducts = (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        if (target && target instanceof HTMLButtonElement && target.id) {
            const categoryID: ProductCategory = target.id as ProductCategory;
            if (categoryID in products) {

                setTimeout(() => {
                    nameCategory.value = categoryID;
                    choisenCategoryProd.value = products[categoryID];
                }, 100)
                
            }
        }
    }

</script>

<template>
    <Banner :content="bannerDataMenus" />
    <SwitcherPage />
    <SwitchTypeNails />
    <DoubleImage :image="['/img-mood-2-12.webp', '/img-mood-1.webp']"/>
    <ProductsSliderMain :slides-data="choisenCategoryProd" 
                        :title="sliderMainPage.title" 
                        :description="sliderMainPage.description"
                        :start-link-slider="false"
                        :space-between="50"
                        >
        <!-- class="link" :class="{'anim': product === nameCategory}" -->
        <div class="switcher-products">
            <ul @click="changeCategoryProducts">
                <li v-for="product in Object.keys(products)" :key="product" > 
                    <button type="button" 
                        :id="product" 
                        :class="{'underline': nameCategory === product}">{{ product }}
                    </button>
                </li>
            </ul>
        </div>
    </ProductsSliderMain>               
    <PriceList />
</template>

<style lang="scss" scoped>
    .switcher-products {
        width: 50%;
        margin: 80px auto 0 auto;
        ul {
            display: flex;
            justify-content: space-between;
        }
        button {
            position: relative;    
            text-transform: uppercase;
            color: #fff;
            text-align: center;
            cursor: pointer;
            text-transform: uppercase;
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
    .link {
        opacity: 0;
        transition-duration: 1s;
    }
    .anim {
        opacity: 1;
    }
    .underline {
       border-bottom: solid 1px #fff;
       padding-bottom: 2px;
        &:hover::before {
            display: none;
        }
    }
</style>