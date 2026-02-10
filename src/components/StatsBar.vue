<template>
  <div class="stats-bar">
    <div class="container stats-container">
      <div v-for="(item, i) in stats" :key="i" class="stat-item">
        <i :class="item.icon"></i>
        <h3>{{ item.value }}</h3>
        <p>{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { icon: 'fas fa-carrot', value: '100%', label: 'Orgánico' },
  { icon: 'fas fa-truck', value: '24h', label: 'Entrega Rápida' },
  { icon: 'fas fa-users', value: '+5000', label: 'Clientes Felices' }
]
</script>