import { onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';
import type { TAnimationData } from '~/types/TAnimationData';


export function useGsapScroll(animData: TAnimationData) {

    const { $gsap } = useNuxtApp();
    const animDataArray = Object.values(animData);

    const parallax = () => {
        for (let component of animDataArray) {
            component.forEach(el => {

                const triggerParam = el.scrollTriggerData || {
                    start: 'top 70%', 
                    end: 'bottom top',
                    toggleActions: 'play none none reverse',
                    scrub: true,
                }

                $gsap.from(el.animateName, {
                    ...el.animation,
                    scrollTrigger: {
                        trigger: el.scrollTriggerBlock,
                        ...triggerParam,
                    }
                })
            })
        }
    }

    onMounted(() => parallax());

}

