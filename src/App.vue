<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import StatsBar from './components/StatsBar.vue'
import ProductosGrid from './components/ProductsGrid.vue'
import Contacto from './components/Contacto.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main>
      <Hero />
      <StatsBar />
      <ProductosGrid />
      <Contacto />
    </main>
    <Footer />
    
    <a href="https://wa.me/tu_numero" class="float-whatsapp" target="_blank">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
</template>