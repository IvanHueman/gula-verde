<template>
  <section id="productos" class="section">
    <div class="container">
      <h2 class="section-title">Nuestros Productos</h2>
      <div class="grid-products">
        
        <div v-for="(producto, index) in misProductos" :key="index" class="product-card">
          <div class="product-image">
            <img :src="producto.img" :alt="producto.nombre">
            <div class="overlay"><i class="fas fa-shopping-cart"></i></div>
          </div>
          <div class="product-info">
            <h3>{{ producto.nombre }}</h3>
            <p>{{ producto.desc }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// En el futuro, estos datos vendrán de Supabase
const misProductos = [
  { 
    nombre: 'Frutas de Temporada', 
    desc: 'Dulces, jugosas y seleccionadas a mano.',
    img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80'
  },
  { 
    nombre: 'Verduras Orgánicas', 
    desc: 'Cultivadas sin pesticidas para tu salud.',
    img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80'
  },
  { 
    nombre: 'Canastas Semanales', 
    desc: 'Recibe lo mejor de la huerta cada semana.',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80'
  }
]
</script>