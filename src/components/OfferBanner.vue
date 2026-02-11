<script setup>
// Sección de ofertas especiales
</script>

<template>
  <section id="ofertas" class="section bg-light">
    <div class="container">
      <div class="banner-oferta reveal-zoom">
        <span class="offer-badge">¡Limitado!</span>
        
        <h2 class="offer-title">¡Ofertas de la Semana!</h2>
        
        <p class="offer-text">
          20% de descuento en todos los cítricos y hortalizas de raíz.
        </p>
        
        <div class="offer-action">
          <a href="#contacto-form" class="btn-white pulse-animation">
            Ver Catálogo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-oferta {
  background: linear-gradient(135deg, #219653, #2ecc71);
  color: #ffffff;
  text-align: center;
  padding: 60px 30px; 
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  max-width: 900px; /* Mantenemos el contenedor estilizado */
  margin: 0 auto;
  box-shadow: 0 15px 30px rgba(46, 204, 113, 0.15);
}

.offer-badge {
  background: #f1c40f;
  color: #2c3e50;
  padding: 6px 16px;
  border-radius: 50px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

/* Título aumentado a 2.8rem para mayor jerarquía */
.offer-title {
  font-size: 2.8rem; 
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.offer-text {
  font-size: 1.2rem; /* Ligero aumento para legibilidad */
  margin-bottom: 35px;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
  line-height: 1.5;
}

.btn-white {
  display: inline-block;
  background-color: #ffffff;
  color: #219653;
  padding: 12px 35px; 
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

/* Decoración y Animación */
.banner-oferta::before {
  content: '';
  position: absolute;
  width: 250px; height: 250px;
  top: -100px; left: -100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
}

.pulse-animation {
  animation: pulseBtn 2s infinite;
}

@keyframes pulseBtn {
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6); }
  70% { box-shadow: 0 0 0 12px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
}

/* Ajustes para móviles */
@media (max-width: 768px) {
  .offer-title { font-size: 2rem; }
  .offer-text { font-size: 1.1rem; }
}
</style>