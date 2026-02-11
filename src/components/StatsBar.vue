<template>
  <div class="stats-bar">
    <div class="container stats-container">
      <div class="stat-item reveal-up">
        <i class="fas fa-carrot"></i>
        <h3>100%</h3>
        <p>Orgánico</p>
      </div>
      <div class="stat-item reveal-up" style="transition-delay: 0.2s;">
        <i class="fas fa-truck"></i>
        <h3>24h</h3>
        <p>Entrega Rápida</p>
      </div>
      <div class="stat-item reveal-up" style="transition-delay: 0.4s;">
        <i class="fas fa-users"></i>
        <h3>+5000</h3>
        <p>Clientes Felices</p>
      </div>
      <div class="stat-item reveal-up" style="transition-delay: 0.6s;">
        <i class="fas fa-award"></i>
        <h3>Top 1</h3>
        <p>Calidad Regional</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-bar {
  background-color: #219653; padding: 50px 0; color: #fff;
  position: relative; z-index: 10; margin-top: -50px; border-radius: 0 0 50px 50px;
}
.stats-container { display: flex; justify-content: space-around; flex-wrap: wrap; text-align: center; }
.stat-item { padding: 20px; min-width: 150px; }
.stat-item i { font-size: 2.5rem; margin-bottom: 10px; color: #f1c40f; }
.stat-item h3 { font-size: 2rem; font-weight: 700; margin-bottom: 5px; }
.stat-item p { font-size: 1rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px; }

@media (max-width: 768px) {
  .stats-bar { margin-top: 0; border-radius: 0; }
}
</style>