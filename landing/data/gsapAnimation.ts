import type { TAnimationData } from "~/types/TAnimationData";


function scrollTriggerData(start: string, end?: string, toggleActions?: string) {
    return {
        scrollTriggerData : {
            start: start,
            end: end || 'bottom top', 
            toggleActions: toggleActions || 'play none none reverse',
            scrub: 1,
        }
    }
}



const gsapAnimationData: TAnimationData = {
    footer: [
        {
            type: "to",
            animateName: ".footer-top-part-image",
            animation: {duration: 4, scale: 1.3 },
            ...scrollTriggerData('top 90%', "bottom top"),
        },
        {
            type: "from",
            animateName: ".text-footer-anim",
            animation: { opacity: 0, y: -50, duration: 2, stagger: 0.99 },
            ...scrollTriggerData('top 80%', 'top top'),
        },
    ],
    header: [
        {
            type: "to",
            animateName: ".banner-image-anim",
            animation: { y: 10, duration: 0.8, scale: 1.1 },
            ...scrollTriggerData('top top', "bottom top"),
        },
        {
            type: "to",
            animateName: ".banner-image",
            animation: { 
                opacity: 1, 
                duration: 1, 
                ease: "power1.inOut",
                scale: 1,
             },
        },
        // {
        //     type: "to",
        //     animateName: ".banner",
        //     animation: { duration: 0.6 },
        //     ...scrollTriggerData('top 100%'),
        // },
    ],
    threeImageBlock: [
        {
            type: "to",
            animateName: ".three-images",
            animation: {
                duration: 2,      
                opacity: 1,       
                ease: "power1.inOut" 
              },
            ...scrollTriggerData('top 30%', "top 60%"),
        },
        {
            type: "to",
            animateName: ".image-first-th",
            animation:  {  
                y: -30, 
            }, 
            ...scrollTriggerData('top 30%', "top 60%"),
        },
        {
            type: "to",
            animateName: ".image-hands-th",
            animation: { y: -30 },
            ...scrollTriggerData('top 30%', "bottom top"),
        },
        {
            type: "from",
            animateName: ".block-three-title-th",
            animation: 
                { opacity: 0, y: 30 }, 
            ...scrollTriggerData('top 60%', "top 60%"),
        },
        {
            type: "from",
            animateName: ".block-three-text-th",
            animation: 
                { opacity: 0, y: 30, delay: 0.3 }, 
            ...scrollTriggerData('top 30%', "top top"),
        },
    ],
    tellingBlock: [
        {   
            type: "from",
            animateName: ".image-left-telling",
            animation: { scale: 1.2, duration: 1, x: -80, y: 80 },
            ...scrollTriggerData('top 60%', "top 10%"),
        },
        {   
            type: "fromTo",
            animateName: ".title-telling-1",
            animation: [
                { opacity: 0,  y: 70 }, 
                { opacity: 1, y: 0, duration: 0.8 },
            ],
            ...scrollTriggerData('top 60%', "top 10%"),
        },
        {   
            type: "fromTo",
            animateName: ".title-telling-2",
            animation: [
                { opacity: 0,  y: 70 }, 
                { opacity: 1, y: 0, duration: 0.4, delay: 0.2 },
            ],
            ...scrollTriggerData('top 30%', "top 30%"),
        },
        {   
            type: "fromTo",
            animateName: ".info-block-text-telling",
            animation: [
                { opacity: 0,  y: 70 }, 
                { opacity: 1, y: 0, duration: 0.6, delay: 0.2 },
            ],
            ...scrollTriggerData('top 20%', "top 80%"),
        },
        {   
            type: "fromTo",
            animateName: ".mini-image-telling",
            animation: [
                { opacity: 0,  y: 50 }, 
                { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scale: 1.05 },
            ],
            ...scrollTriggerData('top 20%', "top 90%"),
        },
    ],
    doubleImage: [
        {   
            type: "to",
            animateName: ".image-double-view",
            animation: { scale: 1, duration: 4, stagger: 0.2 },
            ...scrollTriggerData('top 90%', 'bottom 5%'),
        },
    ],
    collage: [
        {
            type: "from",
            animateName: ".title-collage-anim",
            animation: { opacity: 0,  y: 50, scale: 1.2 },
            ...scrollTriggerData('top 80%', 'top 10%'),
        },
        {
            type: "from",
            animateName: ".right-text-collage-anim",
            animation: { opacity: 0,  y: 50, scale: 1.2 },
            ...scrollTriggerData('top 80%', 'top 10%'),
        },
        {
            type: "from",
            animateName: ".right-email-collage-anim",
            animation: { opacity: 0,  y: -50, scale: 1.2 },
            ...scrollTriggerData('top 60%', 'top 10%'),
        },
        {
            type: "fromTo",
            animateName: ".image-left-collage-anim",
            animation: [
                { y: 65},
                { y: -35}
            ],
            ...scrollTriggerData('top 50%', 'bottom 20%'),
        },
        {
            type: "fromTo",
            animateName: ".image-right-collage-anim",
            animation: [
                { y: 15},
                { y: -25}
            ],
            ...scrollTriggerData('top 50%', 'bottom 20%'),
        },
    ],
    slider: [
        {
            type: "from",
            animateName: ".slider-anim",
            animation: { x: 500, duration: 5 },
            ...scrollTriggerData('top bottom', 'top 30%'),
        },
        {
            type: "from",
            animateName: ".title-products-anim",
            animation: { opacity: 0,  y: 50, scale: 1.1 },
            ...scrollTriggerData('top bottom', 'top 50%'),
        },
        {
            type: "from",
            animateName: ".description-products-anim",
            animation: { opacity: 0,  y: 60 },
            ...scrollTriggerData('top bottom', 'top 50%'),
        },
    ],
    singlePhoto: [
        {
            type: "from",
            animateName: ".image-single-anim",
            animation: { duration: 0.1, scale: 1.02 },
            ...scrollTriggerData('top 40%', 'top top'),
        },
        {
            type: "from",
            animateName: ".right-top-stain-single-anim",
            animation: { x: -50, y: 50, opacity: 1, duration: 2, scale: 1.1, },
            ...scrollTriggerData('top 40%', 'top 10%'),
        },
        {
            type: "from",
            animateName: ".content-single-anim",
            animation: { x: 220, opacity: 0, duration: 5 },
            ...scrollTriggerData('top 20%', 'bottom 100%'),
        },
        {
            type: "from",
            animateName: ".part-text-single-anim",
            animation: { y: 50, opacity: 0, duration: 5 },
            ...scrollTriggerData('top 40%', 'top 10%'),
        },
    ],
};


export const { 
    doubleImage, 
    tellingBlock, 
    threeImageBlock, 
    header, 
    collage, 
    slider,
    singlePhoto, 
    footer,
} = gsapAnimationData;