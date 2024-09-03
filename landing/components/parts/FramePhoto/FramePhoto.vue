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
    <div class="frame-image-block">
        <div class="frame-left" :class="content.backgroundColorLeft">
            <div class="frame-left-img-conteiner">
                <img src="/Img_introducing.webp" alt=" ">
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
    </div>
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
</style>