<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// Nota: Solo dejamos los componentes que se ven en TODAS las páginas
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main>
      <router-view></router-view>
    </main>

    <Footer />
    
    <a href="https://wa.me/tu_numero" class="float-whatsapp" target="_blank">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
</template>

<style>
/* Aquí puedes dejar estilos globales si los tienes */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>