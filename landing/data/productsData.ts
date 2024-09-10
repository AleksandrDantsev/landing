import type { TProductSlider } from "~/types/type_products_slider";

export const sliderMainPage = {
    title: 'Choose your products',
    description: 'Our products are dedicated to combating aging where it’s most crucial: your hands and feet.'
}

export type ProductCategory = "all" | "soaks" | "scrubs" | "mask" | "moisturizers";
type Products = Record<ProductCategory, TProductSlider>;

export const products: Products = {
    "all": [
        { nameSlide: 'Many Minerals of Grey', image: '/small_img/Minty_Matcha_s.webp', description: 'Tone & Lighten' },
        { nameSlide: 'Berry Preserve', image: '/small_img/Minty_Matcha_s.webp', description: 'Anti-Oxidizing & Anti-Aging' },
        { nameSlide: 'Citrus Peel', image: '/small_img/Minty_Matcha_s.webp', description: 'Tone & Lighten' },
        { nameSlide: 'Minty Matcha', image: '/small_img/Minty_Matcha_s.webp', description: 'Sun-Damage & Elasticity' },
        { nameSlide: 'Omega Strawberry', image: '/small_img/Minty_Matcha_s.webp', description: 'Glow & Repair' },
        { nameSlide: 'Liquid Gold Oil', image: '/small_img/Minty_Matcha_s.webp', description: 'Scars & Fine Lines' },
        { nameSlide: 'Skin Haven Lotion', image: '/small_img/Minty_Matcha_s.webp', description: 'Cooling & Soothing' },
        { nameSlide: 'The Carrot Taker Balm', image: '/small_img/Minty_Matcha_s.webp', description: 'Add meAnti-Inflammation' },
    ],
    "soaks": [
        { nameSlide: 'Many Minerals of Grey', image: '/small_img/Minty_Matcha_s.webp', description: 'Tone & Lighten' },
    ],
    "scrubs": [
        { nameSlide: 'Berry Preserve', image: '/small_img/Minty_Matcha_s.webp', description: 'Anti-Oxidizing & Anti-Aging' },
        { nameSlide: 'Citrus Peel', image: '/small_img/Minty_Matcha_s.webp', description: 'Tone & Lighten' },
    ],
    "mask": [
        { nameSlide: 'Minty Matcha', image: '/small_img/Minty_Matcha_s.webp', description: 'Sun-Damage & Elasticity' },
        { nameSlide: 'Omega Strawberry', image: '/small_img/Minty_Matcha_s.webp', description: 'Glow & Repair' },
    ],
    "moisturizers": [
        { nameSlide: 'Liquid Gold Oil', image: '/small_img/Minty_Matcha_s.webp', description: 'Scars & Fine Lines' },
        { nameSlide: 'Skin Haven Lotion', image: '/small_img/Minty_Matcha_s.webp', description: 'Cooling & Soothing' },
        { nameSlide: 'The Carrot Taker Balm', image: '/small_img/Minty_Matcha_s.webp', description: 'Add meAnti-Inflammation' },
        { nameSlide: 'Berry Preserve', image: '/small_img/Minty_Matcha_s.webp', description: 'Anti-Oxidizing & Anti-Aging' },
    ],
};

