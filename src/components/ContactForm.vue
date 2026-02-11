<script setup>
import { ref } from 'vue'

// 1. Creamos un objeto reactivo para los campos del formulario
const formulario = ref({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
})

// 2. Función para manejar el envío sin recargar la página
const procesarEnvio = () => {
  console.log('Datos capturados:', formulario.value)
  alert(`¡Gracias ${formulario.value.nombre}! Hemos recibido tu mensaje sobre: ${formulario.value.asunto}`)
  
  // Limpiar el formulario después del envío
  formulario.value = { nombre: '', email: '', asunto: '', mensaje: '' }
}
</script>

<template>
  <section id="contacto-form" class="section">
    <div class="container">
      <div class="form-wrapper reveal-up">
        
        <div class="form-info">
          <h3>Ponte en contacto</h3>
          <p>¿Tienes alguna duda sobre nuestros productos o quieres hacer un pedido especial? ¡Escríbenos!</p>
          <ul class="info-list">
            <li><i class="fas fa-map-marker-alt"></i> CDMX, México</li>
            <li><i class="fas fa-envelope"></i> ventas@gulaverde.com</li>
            <li><i class="fas fa-phone"></i> +52 55 1234 5678</li>
          </ul>
        </div>

        <form class="actual-form" @submit.prevent="procesarEnvio">
          <div class="input-group">
            <input v-model="formulario.nombre" type="text" placeholder="Tu Nombre" required>
          </div>
          
          <div class="input-group">
            <input v-model="formulario.email" type="email" placeholder="Tu Correo Electrónico" required>
          </div>
          
          <div class="input-group">
            <input v-model="formulario.asunto" type="text" placeholder="Asunto" required>
          </div>
          
          <div class="input-group">
            <textarea 
              v-model="formulario.mensaje" 
              placeholder="¿En qué podemos ayudarte? Cuéntanos los detalles..." 
              rows="5" 
              required
            ></textarea>
          </div>
          
          <button type="submit" class="btn-primary full-width">Enviar Mensaje</button>
        </form>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* CONTENEDOR PRINCIPAL */
.form-wrapper {
  display: flex;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border-radius: 20px;
  overflow: hidden;
}

/* COLUMNA VERDE (INFO) */
.form-info {
  flex: 1;
  background-color: #219653; /* var(--dark-green) */
  color: #ffffff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-info h3 { font-size: 2rem; margin-bottom: 20px; }
.form-info p { margin-bottom: 30px; opacity: 0.9; line-height: 1.6; }

.info-list { list-style: none; }
.info-list li { 
  margin-bottom: 20px; 
  display: flex; 
  align-items: center; 
  gap: 15px; 
  font-size: 1.1rem;
}
.info-list i { color: #f1c40f; font-size: 1.2rem; }

/* COLUMNA BLANCA (FORMULARIO) */
.actual-form {
  flex: 1.5;
  padding: 50px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input, 
.input-group textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus, 
.input-group textarea:focus {
  border-color: #2ecc71;
  box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.1);
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .form-wrapper {
    flex-direction: column;
  }
  .form-info, .actual-form {
    padding: 30px;
  }
}
</style>