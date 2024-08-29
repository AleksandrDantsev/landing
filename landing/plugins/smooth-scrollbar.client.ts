import { defineNuxtPlugin } from '#app'
import Scrollbar from 'smooth-scrollbar'

export default defineNuxtPlugin(() => {
  const initScrollbar = () => {
    const container = document.documentElement; // Или document.body, если это вам подходит
    if (container) {
      Scrollbar.init(container, {
        damping: 0.1, // Настройка плавности скролла
      });
    }
  };

  window.addEventListener('load', initScrollbar);
})