<script setup>
// Contenido estático para la sección "Sobre Nosotros"
</script>

<template>
  <section id="nosotros" class="section bg-light">
    <div class="container split-section">
      
      <div class="text-content reveal-left">
        <h2 class="section-title text-left">Sobre Gula Verde</h2>
        
        <p>
          Somos una empresa dedicada a conectar a los agricultores locales con tu hogar. 
          En Gula Verde creemos que la alimentación saludable debe ser accesible, 
          fresca y sostenible.
        </p>
        
        <p>
          Nuestros estándares de calidad aseguran que cada manzana, lechuga o tomate 
          que llega a tus manos esté en su punto perfecto de maduración.
        </p>

        <a href="#" class="btn-outline-green mt-4">Conoce a los productores</a>
      </div>

      <div class="image-content reveal-right">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
          alt="Mercado local"
        >
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.split-section { 
  display: flex; 
  align-items: center; 
  gap: 60px; 
}

.text-content { 
  flex: 1; 
}

/* Alineación del Título y la Línea Amarilla a la izquierda */
.section-title.text-left { 
  text-align: left; 
}

.section-title.text-left::after { 
  margin: 15px 0 0; /* Mueve la línea amarilla al inicio (izquierda) */
}

.image-content { 
  flex: 1; 
}

.image-content img { 
  width: 100%; 
  border-radius: 20px; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.08); 
}

/* Estilo para el botón (si no estuviera en main.css) */
.btn-outline-green {
    display: inline-block; 
    border: 2px solid #2ecc71; 
    color: #2ecc71;
    padding: 10px 25px; 
    border-radius: 50px; 
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
}

.btn-outline-green:hover { 
    background-color: #2ecc71; 
    color: #ffffff; 
}

.mt-4 { margin-top: 1.5rem; }

/* Responsive: Centramos todo solo en pantallas pequeñas */
@media (max-width: 768px) {
  .split-section { 
    flex-direction: column; 
    gap: 30px; 
    text-align: center;
  }
  
  .section-title.text-left {
    text-align: center;
  }
  
  .section-title.text-left::after {
    margin: 15px auto 0; /* En móvil sí se centra */
  }
}
</style>