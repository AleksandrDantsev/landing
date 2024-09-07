export type TAnimationData = {
    [key: string]: Array<{
        type: 'to' | 'from' | "fromTo",
        animateName: string,
        animation: {},
        scrollTriggerData?: Record<string, any>
    }>
};
