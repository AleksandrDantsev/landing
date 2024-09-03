<script lang="ts" setup>

</script>

<template>
    <footer>
        <div class="footer-top-part">
            <div class="top-footer-wrapper">
                <div class="top-inscription">Calling all Nail Techs and Waxing Specialists</div>
                <div class="to-join-us">
                    <p>We invite</p>
                    <p>you to join</p>
                    <p>Team Cure.</p>
                </div>
                <div class="mail"><NuxtLink to="mailto:wena@gmail.com">wena@gmail.com</NuxtLink></div>
            </div>
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
        display: flex;
        align-items: center;
        height: 110vh;
        width: 100%;
        background: url("/Img_3.png") center center no-repeat;
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
</style>