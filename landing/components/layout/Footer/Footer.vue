<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { footer } from '~/data/gsapAnimation';
    import { useGsapAnimation } from '~/composable/useGsapAnimation';

    const triggerBlock = ref();

    onMounted(() => {
        if (triggerBlock.value) {
            useGsapAnimation(triggerBlock, footer);
        }
    })

</script>

<template>
    <footer>
        <div class="footer-top-part" ref="triggerBlock">
            <div class="top-footer-wrapper">
                <div class="top-inscription">Attention Nail Technicians and Waxing Experts!</div>
                <div class="to-join-us">
                    <p class="text-footer-anim">We invite</p>
                    <p class="text-footer-anim">you to join</p>
                    <p class="text-footer-anim">Team Soin.</p>
                </div>
                <div class="mail"><NuxtLink to="mailto:wena@gmail.com">wena@gmail.com</NuxtLink></div>
            </div>
            <img src="/large_img/footer_l.webp" alt=" " class="footer-top-part-image lazy-img">
        </div>
        <div class="footer-bottom-part">
            <div class="footer-bottom-part-wrapper">
                <div class="ques-block">
                    <ul>
                        <li class="question">Have Questions?</li>
                        <li><NuxtLink to="mailto:wena@gmail.com">Tell us more</NuxtLink></li>
                    </ul>
                </div>
                <div class="links-block">
                    <div class="links-line">
                        <ul>
                            <li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="#">Terms of Service</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="links-line">
                        <ul>
                            <li><NuxtLink to="#">Instagram</NuxtLink></li>
                            <li><NuxtLink to="#">Facebook</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    $colorText: #ffffff;

    .footer-top-part {
        position: relative;
        display: flex;
        align-items: center;
        height: 100vh;
        width: 100%;
        overflow: hidden;

    }
    .footer-top-part-image {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        transform: scale(1.2);
        object-fit: cover;
    }
    .top-footer-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70%;
        width: 80%;
        margin: 0 auto;
    }
    .top-inscription {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        line-height: 25px;
        color: $colorText;
    }
    .to-join-us {
        font-size: 3.8rem;
        p {
            color: $colorText;
            text-shadow: 0 1px 2px #53535391;
            margin: 15px 0;
        }
    }
    .mail {
        display: flex;
        text-transform: uppercase;
        justify-content: flex-end;
        font-size: 18px;
        a {
            color: $colorText;
        }
    }
    .footer-bottom-part {
        display: flex;
        align-items: center;
        height: 380px;
        background-color: #95a78a;
        padding-bottom: 50px;
    }
    .footer-bottom-part-wrapper {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
    } 
    .links-line {
        li {
            padding: 10px 5px;
            font-size: 14px;
            text-transform: uppercase;
            a {
                color: $colorText;
            }
        }
    }
    .ques-block {
        li {
            padding: 10px 5px;
            font-size: 28px;
        }
    }
    .question {
        color: $colorText;
        font-size: 28px;
    }

    @media (max-width: 550px) {
        .to-join-us {
            font-size: 3rem;
        }
        .mail {
            justify-content: start;
        }
        .footer-bottom-part-wrapper {
            flex-direction: column;
        }
        .ques-block {
            margin-bottom: 25px;
        }
        .footer-top-part {
            height: 60vh;
        }
    }
</style>