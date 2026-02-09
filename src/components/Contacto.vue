<template>
  <section id="contacto" class="contacto-section">
    <div class="container">
      <div class="form-wrapper">
        <div class="form-info">
          <h3>¡Hablemos!</h3>
          <p>Frescura directa desde el campo a tu mesa.</p>
          <ul class="info-list">
            <li><i class="fas fa-envelope"></i> huertamji@gmail.com</li>
            <li><i class="fas fa-map-marker-alt"></i> CDMX, México</li>
          </ul>
        </div>
        <form class="actual-form" @submit.prevent="handleSubmit">
          <div class="input-group">
            <label>Nombre completo</label>
            <input type="text" placeholder="Tu nombre" required>
          </div>
          <div class="input-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="correo@ejemplo.com" required>
          </div>
          <div class="input-group">
            <label>Mensaje</label>
            <textarea placeholder="¿En qué podemos ayudarte?" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn-primary btn-full">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert('¡Mensaje capturado! Pronto lo conectaremos a Supabase.')
}
</script>