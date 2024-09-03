import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin(nuxtApp => {

    if (!nuxtApp.$gsap) {
        nuxtApp.provide('gsap', gsap);
        nuxtApp.provide('ScrollTrigger', ScrollTrigger);
      }
});