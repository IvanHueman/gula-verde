<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="nav-container">
      <div class="logo">Gula <span class="green-text">Verde</span></div>
      
      <button class="hamburger" @click="toggleMenu" aria-label="Menu">
        <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <Transition name="slide-fade">
        <ul v-if="isMenuOpen || !isMobile()" class="nav-menu" :class="{ 'active': isMenuOpen }">
          <li><a href="#inicio" @click="closeMenu" class="nav-link">Inicio</a></li>
          <li><a href="#productos" @click="closeMenu" class="nav-link">Productos</a></li>
          <li><a href="#nosotros" @click="closeMenu" class="nav-link">Nosotros</a></li>
          <li><a href="#contacto" @click="closeMenu" class="nav-link highlight">Ofertas</a></li>
        </ul>
      </Transition>
    </div>
  </header>
</template>

<script>
// Pequeña función auxiliar para detectar si es móvil en el template
export default {
  methods: {
    isMobile() {
      if (typeof window !== 'undefined') {
        return window.innerWidth <= 768;
      }
      return false;
    }
  }
}
</script>

<style scoped>
/* =========================================
   ANIMACIONES ESPECÍFICAS DE VUE (TRANSITION)
   Se colocan aquí para no ensuciar el CSS global
========================================= */

/* Estado cuando el menú está entrando o saliendo */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Estado inicial (fuera de pantalla) */
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Estado final (dentro de pantalla) */
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>