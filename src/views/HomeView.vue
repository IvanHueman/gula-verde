<template>
  <main>
    <HeroSection />
    <StatsBar />
    
    <section id="productos" class="section">
      <div class="container">
        <h2 class="section-title" v-reveal>Nuestros Productos</h2>
        <div class="grid-products">
          <ProductCard v-for="(p, i) in items" :key="i" v-bind="p" v-reveal="i*0.2" />
        </div>
      </div>
    </section>

    <AboutSection />
    <Testimonials />
    <OfferBanner />
    <ContactForm />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import StatsBar from '../components/StatsBar.vue'
import ProductCard from '../components/ProductCard.vue'
import AboutSection from '../components/AboutSection.vue'
import Testimonials from '../components/Testimonials.vue'
import OfferBanner from '../components/OfferBanner.vue'
import ContactForm from '../components/ContactForm.vue'

const items = [
  { title: 'Frutas', description: 'Seleccionadas.', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80' },
  { title: 'Verduras', description: 'Orgánicas.', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=400&q=80' },
  { title: 'Canastas', description: 'Semanales.', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80' }
]
</script>