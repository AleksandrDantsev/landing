<script lang="ts" setup>
    import SinglePhoto from '~/components/parts/SinglePhoto/SinglePhoto.vue';
    import CirclePoint from '~/components/UI/CirclePoint.vue';
    import { singleNailsData } from '~/data/singleCardData';
    import { ref, onMounted } from "vue";

    const images = ref([
        { src: singleNailsData.mainImage[0], id: 'nails-quickie', label: 'Quickie' },
        { src: singleNailsData.mainImage[1], id: 'nails-classic', label: 'Classic' },
        { src: singleNailsData.mainImage[2], id: 'nails-Soin', label: 'Soin' },
    ]);

    const currentImageInCollage = ref<string>('');

    onMounted(() => {
        if (Array.isArray(singleNailsData.mainImage)) currentImageInCollage.value = singleNailsData.mainImage[0];
        else currentImageInCollage.value = singleNailsData.mainImage;
    })


    const changePhoto = (e: MouseEvent) => {
        if (Array.isArray(singleNailsData.mainImage)) {
            const target = e.target as HTMLButtonElement;

            if (target && target instanceof HTMLButtonElement && target.id) {
                switch(target.id) {
                    case "nails-quickie": currentImageInCollage.value = singleNailsData.mainImage[0];
                        break;
                    case "nails-classic": currentImageInCollage.value = singleNailsData.mainImage[1];
                        break;
                    case "nails-Soin": currentImageInCollage.value = singleNailsData.mainImage[2];
                        break;
                    default: return;
                }
            }
        }
    }

</script>

<template>
    <div class="switcher-type-conteiner" :class="singleNailsData.backgroundClass">
        <SinglePhoto :content="singleNailsData" :currentImageInCollage="currentImageInCollage" />
        <div class="switcher-type">
            <div class="switcher-type-inner">
                <ul @click="changePhoto">
                    <li v-for="image in images" 
                        :key="image.src"
                        :class="{'bright': currentImageInCollage === image.src}">
                        <CirclePoint v-if="currentImageInCollage === image.src" />
                        <button type="button" :id="image.id">{{ image.label }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .switcher-type-conteiner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .switcher-type {
        position: relative;
        top: -100px; /* Изменено */
        z-index: 10;
        height: 120px;
        min-width: 40%;
        margin: 0 auto 25px auto;
        background-color: inherit;
    }

    .switcher-type-inner {
        height: 100%;
        ul {
            display: flex;
            justify-content: space-between;
            height: 100%;
            padding: 0; /* Добавлено, чтобы убрать возможные отступы */
            margin: 0; /* Добавлено, чтобы убрать возможные отступы */
        }
        li {
            opacity: 0.5;
            position: relative;
            height: 100%;
            transition: opacity 300ms; /* Обновлено для ясности */
            width: calc(100% / 3 - 15px); /* Убедитесь, что это значение соответствует вашим ожиданиям */
        }
        button {
            width: 100%;
            height: 100%;
            text-align: center;
            cursor: pointer;
            font-size: 1.6rem;
            min-width: 170px;
            color: #db5959;
            letter-spacing: 3px;
            font-style: italic;
        }
    }

    .light-brown-back {
        background-color: #a3987ab6;
    }

    .gray-back {
        background-color: #dbd3c3;
    }

    .bright {
        opacity: unset !important;
    }

    @media (max-width: 600px) {
        .switcher-type {
            width: 70%;
        }
        .circle-point {
            display: inline-block;
            width: 100%;
        }
        .bright {
            width: 100%;
        }
        .switcher-type-inner {
            button {
                min-width: unset;
                font-size: 1.2rem;
                width: 100%;
            }
        }
    }
    @media (max-width: 400px) {
        .switcher-type {
            width: 90%;
        }
        .switcher-type-inner {
            button {
                min-width: unset;
                width: 100%;
            }
        }
        .image-container {
            width: 90%;
        }
    }
</style>