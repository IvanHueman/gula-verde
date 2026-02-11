<script setup>
// Componente estático de pie de página
</script>

<template>
  <footer id="contacto" class="footer">
    <div class="container footer-content">
      
      <div class="footer-col reveal-up">
        <h3 class="logo">Gula <span class="green-text">Verde</span></h3>
        <p>
          Llevando la frescura del campo mexicano a tu mesa desde 2020. 
          Calidad garantizada del agricultor a tu hogar.
        </p>
      </div>

      <div class="footer-col reveal-up" style="transition-delay: 0.2s;">
        <h3>Enlaces Rápidos</h3>
        <ul class="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto-form">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-col reveal-up" style="transition-delay: 0.4s;">
        <h3>Síguenos</h3>
        <p>Entérate de las cosechas recientes.</p>
        <div class="socials">
          <a href="#" class="social-icon facebook" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon instagram" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="social-icon whatsapp" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Gula Verde. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a252f;
  color: #ecf0f1;
  padding: 80px 0 0; /* Padding superior para dar aire, inferior se maneja en el bottom */
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
}

.footer-col h3 {
  color: #ffffff;
  margin-bottom: 25px;
  font-size: 1.4rem;
}

.footer-col p {
  color: #bdc3c7;
  line-height: 1.6;
}

/* Enlaces */
.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #bdc3c7;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #2ecc71;
}

/* Redes Sociales (Estilo Elegante) */
.socials {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-icon {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
  background-color: #ffffff;
  color: #219653;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Copyright Bar */
.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px 0;
  margin-top: 40px;
  color: #95a5a6;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    text-align: center;
  }
  .socials {
    justify-content: center;
  }
  .footer {
    padding-bottom: 80px; /* Espacio para que la Tab Bar móvil no tape el texto */
  }
}
</style>