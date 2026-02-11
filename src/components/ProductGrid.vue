<script setup>
// 1. Definimos los datos de tus productos en un Array
// Esto permite que el HTML sea mucho más limpio
const productos = [
  {
    id: 1,
    titulo: 'Frutas de Temporada',
    desc: 'Dulces, jugosas y seleccionadas a mano.',
    img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80',
    delay: '0.2s'
  },
  {
    id: 2,
    titulo: 'Verduras Orgánicas',
    desc: 'Cultivadas sin pesticidas para tu salud.',
    img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=400&q=80',
    delay: '0.4s'
  },
  {
    id: 3,
    titulo: 'Canastas Semanales',
    desc: 'Recibe lo mejor de la huerta cada semana.',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80',
    delay: '0.6s'
  }
]
</script>

<template>
  <section id="productos" class="section">
    <div class="container">
      <h2 class="section-title reveal-up">Nuestros Productos</h2>
      
      <div class="grid-products">
        <div 
          v-for="producto in productos" 
          :key="producto.id" 
          class="product-card reveal-up" 
          :style="{ transitionDelay: producto.delay }"
        >
          <div class="product-image">
            <img :src="producto.img" :alt="producto.titulo">
            <div class="overlay">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
          
          <div class="product-info">
            <h3>{{ producto.titulo }}</h3>
            <p>{{ producto.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================
   6. PRODUCTOS (Estilos específicos)
========================================= */
.grid-products { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 40px; 
}

.product-card {
  background: #ffffff; 
  border-radius: 20px; 
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08); 
  transition: all 0.4s ease; 
  border: 1px solid rgba(0,0,0,0.04);
}

.product-card:hover { 
  transform: translateY(-15px); 
  box-shadow: 0 20px 40px rgba(46, 204, 113, 0.2); 
}

.product-image { 
  position: relative; 
  overflow: hidden; 
  height: 260px; 
}

.product-image img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  transition: transform 0.6s ease; 
}

.product-card:hover .product-image img { 
  transform: scale(1.1); 
}

.product-image .overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(46, 204, 113, 0.4); 
  display: flex; justify-content: center; align-items: center;
  opacity: 0; transition: all 0.4s ease;
}

.product-image .overlay i { 
  color: white; 
  font-size: 2rem; 
  transform: translateY(20px); 
  transition: all 0.4s ease; 
}

.product-card:hover .overlay { opacity: 1; }
.product-card:hover .overlay i { transform: translateY(0); }

.product-info { padding: 25px; text-align: center; }
.product-info h3 { color: #219653; margin-bottom: 10px; font-size: 1.3rem; }
.product-info p { color: #7f8c8d; font-size: 0.95rem; }
</style>