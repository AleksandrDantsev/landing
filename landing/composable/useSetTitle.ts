import { useHead } from '#app';

export const useSetTilte = (titleStr: string) => {
    useHead({ title: titleStr });
}