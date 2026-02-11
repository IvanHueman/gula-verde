import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

// Directiva v-reveal: Maneja todas las animaciones de scroll automáticamente
app.directive('reveal', {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('active');
          if (binding.value) el.style.transitionDelay = `${binding.value}s`;
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);
  }
})

app.use(router)
app.mount('#app')