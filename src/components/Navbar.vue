<script setup>
import { onMounted } from 'vue'

// Si decides añadir lógica de apertura de menú lateral en el futuro, 
// podrías usar una variable reactiva aquí.
</script>

<template>
  <header class="header">
    <div class="container nav-container">
      <a href="#" class="logo animate-logo">
        Gula <span class="green-text">Verde</span>
      </a>
      
      <nav class="navbar">
        <ul class="nav-menu">
          <li class="nav-item animate-nav" style="--delay:0.1s">
            <a href="#inicio" class="nav-link">Inicio</a>
          </li>
          <li class="nav-item animate-nav" style="--delay:0.2s">
            <a href="#productos" class="nav-link">Productos</a>
          </li>
          <li class="nav-item animate-nav" style="--delay:0.3s">
            <a href="#nosotros" class="nav-link">Nosotros</a>
          </li>
          <li class="nav-item animate-nav" style="--delay:0.4s">
            <a href="#ofertas" class="nav-link highlight">Ofertas</a>
          </li>
        </ul>
        <div class="hamburger">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  </header>

  <nav class="mobile-nav">
    <a href="#inicio" class="mobile-nav-item">
      <i class="fas fa-home"></i>
      <span>Inicio</span>
    </a>
    <a href="#productos" class="mobile-nav-item">
      <i class="fas fa-leaf"></i>
      <span>Productos</span>
    </a>
    <a href="#nosotros" class="mobile-nav-item">
      <i class="fas fa-users"></i>
      <span>Nosotros</span>
    </a>
    <a href="#ofertas" class="mobile-nav-item highlight-tab">
      <i class="fas fa-tag"></i>
      <span>Ofertas</span>
    </a>
  </nav>
</template>

<style scoped>
/* =========================================
   HEADER & NAVEGACIÓN DESKTOP
========================================= */
.header {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  position: fixed; 
  width: 100%; 
  top: 0; 
  z-index: 1000;
}

.nav-container { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  height: 80px; 
}

.logo { 
  font-size: 1.8rem; 
  font-weight: 700; 
  color: #2c3e50; /* Var text-color */
}

.nav-menu { 
  display: flex; 
  gap: 30px; 
}

.nav-link { 
  font-weight: 600; 
  font-size: 1rem; 
  position: relative; 
  color: inherit;
}

.nav-link::after {
  content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; left: 0;
  background-color: #2ecc71; /* Var primary-color */
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after { width: 100%; }
.nav-link:hover { color: #2ecc71; }
.nav-link.highlight { color: #e74c3c; } /* Var offer-color */

.hamburger { display: none; font-size: 1.5rem; cursor: pointer; }

/* =========================================
   ESTÁNDAR MÓVIL: Tab Bar
========================================= */
.mobile-nav {
  display: none; /* Oculto por defecto en desktop */
}

@media (max-width: 768px) {
  .header .nav-menu, 
  .header .hamburger {
    display: none !important;
  }

  .mobile-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
    z-index: 2000;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    padding-bottom: env(safe-area-inset-bottom);
  }

  .mobile-nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #7f8c8d; /* Var text-light */
    gap: 4px;
    transition: color 0.3s ease;
  }

  .mobile-nav-item.highlight-tab {
    color: #e74c3c; /* Var offer-color */
  }

  .mobile-nav-item i { font-size: 1.3rem; }
  .mobile-nav-item span { font-size: 0.7rem; }
}
</style>