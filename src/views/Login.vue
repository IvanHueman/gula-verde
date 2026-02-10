<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleDummyLogin = () => {
  alert('Modo Performance: El login real está desactivado para evitar errores de conexión.')
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h2>Acceso Privado</h2>
      <form @submit.prevent="handleDummyLogin">
        <input v-model="email" type="email" placeholder="Correo">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button class="btn-primary">Entrar (Modo Offline)</button>
      </form>
      <router-link to="/">← Volver al inicio</router-link>
    </div>
  </div>
</template>

<style scoped>
/* Estilos mínimos para que se vea bien */
.login-page { height: 100vh; display: flex; align-items: center; justify-content: center; background: #f4f4f4; }
.login-card { background: white; padding: 2rem; border-radius: 15px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
input { display: block; width: 100%; margin: 10px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
.btn-primary { width: 100%; cursor: pointer; }
</style>