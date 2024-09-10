<script lang="ts" setup>

    interface Props {
        content: {
            image: string;
            text: Array<string>;
            backgroundColorLeft: string;
            backgroundColorRight: string;
        }
    };

    defineProps<Props>();

</script>

<template>
    <article class="frame-image-block">
        <div class="frame-left" :class="content.backgroundColorLeft">
            <div class="frame-left-img-conteiner">
                <img :src="content.image" alt=" " class="lazy-img">
            </div>
        </div>
        <div class="frame-right">
            <div class="frame-right-text-conteiner" :class="content.backgroundColorRight">
                <div class="frame-right-text">
                    <p v-for="str in content.text" :key="str">
                        <br>{{ str }}<br>
                    </p>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>

    .gray-back {
        background-color: #dddddd;
    }
    .blue-back {
        background-color: #85aebb;
    }

    .frame-image-block {
        display: flex;
        width: 100%;
        height: 100vh;

    }
    .frame-left {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
    .frame-left-img-conteiner {
        width: 60%;
        height: 60%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .frame-right {
        width: 50%;
    }
    .frame-right-text-conteiner {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        
        padding-left: 20px;
    }
    .frame-right-text {
        margin: 0 auto;
        p {
            text-transform: uppercase;
            font-size: 1.2rem;
            letter-spacing: 0.5rem;
            color: #fff;
        }
    }

    @media (max-width: 700px) {
        .frame-image-block {
            flex-direction: column;
            height: auto;
        }
        .frame-left {
            width: 100%;
            padding: 60px 0;
        }
        .frame-right {
            width: 100%;
        }
        .frame-right-text-conteiner {
            width: 100%;
            padding: 150px 0;
        }
    }
    @media (max-width: 420px) {
        .frame-right-text-conteiner {
            width: 100%;
            padding: 80px 0;
        }
    }
</style>