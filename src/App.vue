<script setup>
import { onMounted } from 'vue'

// 1. IMPORTACIÓN DE COMPONENTES
// (Asegúrate de haber creado estos archivos en src/components/)
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import ProductGrid from './components/ProductGrid.vue'
import AboutSection from './components/AboutSection.vue'
import Testimonials from './components/Testimonials.vue'
import OffersBanner from './components/OfferBanner.vue'
import ContactForm from './components/ContactForm.vue'
import TheFooter from './components/Footer.vue'

onMounted(() => {
  // 2. LÓGICA DE ANIMACIÓN (Tu JS Original adaptado)
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom')

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  }

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        // Una vez que se anima, dejamos de observarlo para ahorrar recursos
        observer.unobserve(entry.target)
      }
    })
  }, revealOptions)

  revealElements.forEach(el => revealOnScroll.observe(el))
})
</script>

<template>
  <Navbar />

  <main>
    <HeroSection />
    
    <StatsBar />
    
    <ProductGrid />
    
    <AboutSection />
    
    <Testimonials />
    
    <OffersBanner />
    
    <ContactForm />
  </main>

  <TheFooter />

  <a href="#" class="float-email" target="_blank">
    <i class="fas fa-envelope"></i>
    <span class="tooltip-text">Envíanos un correo</span>
  </a>

  <a href="https://wa.me/5647561780?text=Hola%20Gula%20Verde" class="float-whatsapp" target="_blank">
    <i class="fab fa-whatsapp"></i>
    <span class="tooltip-text">¡Haz tu pedido aquí!</span>
  </a>
</template>

<style>
/* Aquí puedes poner estilos globales rápidos. 
   Pero lo ideal es que las variables y resets estén en src/assets/main.css 
*/

/* Estilos para los botones flotantes (Sección 10 de tu CSS) */
.float-whatsapp, .float-email {
  position: fixed; right: 30px; width: 60px; height: 60px;
  border-radius: 50%; color: #FFF; text-align: center; font-size: 28px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.15); z-index: 1000;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
}

.tooltip-text {
  visibility: hidden; width: 140px; background-color: #333; color: #fff;
  text-align: center; border-radius: 6px; padding: 5px 0; position: absolute;
  z-index: 1; right: 115%; font-size: 14px; opacity: 0; transition: opacity 0.3s;
}

.float-whatsapp:hover .tooltip-text, .float-email:hover .tooltip-text { 
  visibility: visible; 
  opacity: 1; 
}

.float-whatsapp {
  bottom: 30px; background-color: #25d366; animation: pulseBtn 3s infinite;
}

.float-email {
  bottom: 105px; background-color: #3498db; 
}

@keyframes pulseBtn { 
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); } 
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); } 
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); } 
}

/* Ajuste responsivo para botones flotantes cuando aparece la Tab Bar móvil */
@media (max-width: 768px) {
  .float-whatsapp { bottom: 85px !important; right: 15px !important; width: 50px !important; height: 50px !important; }
  .float-email { bottom: 145px !important; right: 15px !important; width: 50px !important; height: 50px !important; }
}
</style>
