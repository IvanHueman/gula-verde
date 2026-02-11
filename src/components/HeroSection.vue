<script setup>
// Este componente es estático por ahora, no necesita lógica JS.
// Las animaciones de entrada (animate-hero) se manejan vía CSS global
// y las del slider (slideFade) vía CSS encapsulado aquí.
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero-slider">
      <div class="slide slide1"></div>
      <div class="slide slide2"></div>
      <div class="slide slide3"></div>
    </div>

    <div class="hero-content">
      <h1 class="animate-hero title">Frescura del campo a tu mesa</h1>
      <p class="animate-hero subtitle">La mejor selección de frutas y verduras orgánicas de la región.</p>
      <a href="#contacto-form" class="btn-primary animate-hero btn-hero">Contáctanos</a>
    </div>
  </section>
</template>

<style scoped>
/* =========================================
   HERO SECTION & CARRUSEL
========================================= */
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Ajuste para que el navbar fijo no tape el inicio si se usa scroll-padding en html */
  margin-top: 0; 
}

.hero-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: slideFade 18s infinite;
  opacity: 0;
  transform: scale(1.1);
}

/* Imágenes del slider */
/* Nota: Si prefieres usar imágenes locales en lugar de Unsplash, 
   guárdalas en src/assets/ y usa: url('@/assets/tu-imagen.jpg') */
.slide1 {
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1920&q=80');
  animation-delay: 0s;
}

.slide2 {
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80');
  animation-delay: 6s;
}

.slide3 {
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1920&q=80');
  animation-delay: 12s;
}

/* Keyframes del Slider (Definidos localmente para este componente) */
@keyframes slideFade {
  0% { opacity: 0; transform: scale(1.1); }
  5% { opacity: 1; }
  33.33% { opacity: 1; transform: scale(1); }
  38.33% { opacity: 0; }
  100% { opacity: 0; }
}

/* Contenido del Hero */
.hero-content {
  color: #ffffff; /* Usando valor directo por si no están las vars globales */
  z-index: 1;
  max-width: 800px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 40px;
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

/* Estilos responsivos específicos del Hero */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>