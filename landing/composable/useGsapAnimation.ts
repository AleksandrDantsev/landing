import { useNuxtApp } from "#app";

type TAnimationData = {
    type: "from" | "fromTo" | "to",
    animateName: string,
    animation: {},
    scrollTriggerData?: {},
}


export function useGsapAnimation(triggerBlock: Ref, animationData: TAnimationData[]) {
    const { $gsap } = useNuxtApp();

    const animate = () => {
        animationData.forEach(parameter => {

        const triggerParam = parameter.scrollTriggerData || null

        if (Array.isArray(parameter.animation)) {   

            const from = parameter.animation[0];
            const to = parameter.animation[1];

            $gsap.fromTo(parameter.animateName,
                from,
                {
                    ...to,
                    scrollTrigger: {
                        trigger: triggerBlock.value,
                        ...triggerParam,
                        // markers: true,
                    }
                },
            );
        }
        else {
            const type = parameter.type;
            if (type === "to" || type === "from") {
                $gsap[type](parameter.animateName, {
                        ...parameter.animation,
                        scrollTrigger: {
                            trigger: triggerBlock.value,
                            ...triggerParam,
                            // markers: true,
                        }
                    },
                );
            }
        }

    });
        
}

    animate()
}
