<script setup>
// 1. Array de datos de testimonios
const testimonios = [
  {
    id: 1,
    estrellas: '★★★★★',
    texto: '"La frescura es incomparable. Las manzanas llegaron crujientes y dulces. Definitivamente mi nueva verdulería favorita."',
    nombre: 'Mariana López',
    cargo: 'Cliente Frecuente',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    delay: '0.2s'
  },
  {
    id: 2,
    estrellas: '★★★★★',
    texto: '"Excelente servicio a domicilio. Todo llegó limpio y bien empacado. Me encanta apoyar a una empresa local."',
    nombre: 'Carlos Ruiz',
    cargo: 'Chef Local',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    delay: '0.4s'
  },
  {
    id: 3,
    estrellas: '★★★★☆',
    texto: '"Las canastas semanales me ahorran muchísimo tiempo. La calidad de las verduras de hoja verde es top."',
    nombre: 'Sofía Méndez',
    cargo: 'Mamá y Nutrióloga',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
    delay: '0.6s'
  }
]
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title reveal-up">Lo que dicen nuestros clientes</h2>
      
      <div class="testimonials-grid">
        <div 
          v-for="t in testimonios" 
          :key="t.id" 
          class="testimonial-card reveal-up" 
          :style="{ transitionDelay: t.delay }"
        >
          <div class="stars">{{ t.estrellas }}</div>
          <p>{{ t.texto }}</p>
          
          <div class="customer-info">
            <img :src="t.foto" :alt="t.nombre">
            <div>
              <h4>{{ t.nombre }}</h4>
              <span>{{ t.cargo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================
   7. TESTIMONIOS (Estilos específicos)
========================================= */
.testimonials-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 30px; 
}

.testimonial-card {
  background: #ffffff; 
  padding: 30px; 
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05); 
  border-left: 5px solid #2ecc71; /* var(--primary-color) */
}

.stars { 
  color: #f1c40f; /* var(--accent-color) */
  font-size: 1.2rem; 
  margin-bottom: 15px; 
}

.testimonial-card p { 
  font-style: italic; 
  margin-bottom: 20px; 
  color: #555; 
}

.customer-info { 
  display: flex; 
  align-items: center; 
  gap: 15px; 
}

.customer-info img { 
  width: 50px; 
  height: 50px; 
  border-radius: 50%; 
  object-fit: cover; 
}

.customer-info h4 { 
  font-size: 1rem; 
  color: #2c3e50; /* var(--text-color) */
  margin-bottom: 0; 
}

.customer-info span { 
  font-size: 0.85rem; 
  color: #999; 
}
</style>