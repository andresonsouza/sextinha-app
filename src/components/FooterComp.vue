<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <h3>SextinhaApp</h3>
          <p>
            Servindo fast food delicioso com ingredientes frescos e atendimento amigável desde 2014.
          </p>
          <div class="social">
            <a href="#">
              <Facebook class="icon" />
            </a>
            <a href="#">
              <Instagram class="icon" />
            </a>
            <a href="#">
              <Twitter class="icon" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#deals">Promoções</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <!-- Menu Categories -->
        <div>
          <h4>Cardápio</h4>
          <ul>
            <li><a href="#">Hambúrgueres</a></li>
            <li><a href="#">Pizzas</a></li>
            <li><a href="#">Frangos</a></li>
            <li><a href="#">Acompanhamentos</a></li>
            <li><a href="#">Bebidas</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4>Contato</h4>
          <div class="contact-info">
            <div class="contact-item">
              <MapPin class="icon red" />
              <span>Rua da Comida, 123, Centro</span>
            </div>
            <div class="contact-item">
              <Phone class="icon red" />
              <span>(11) 1234-5678</span>
            </div>
            <div class="contact-item">
              <Mail class="icon red" />
              <span>ola@sextinhaapp.com</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© 2024 SextinhaApp. Todos os direitos reservados.</p>
        <div class="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Serviço</a>
          <a href="#">Política de Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-vue-next'
</script>

<style scoped>
.footer {
  background: #111827;
  /* equivalente ao bg-gray-900 */
  color: #fff;
  padding: 4rem 1rem;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  color: #ef4444;
  /* vermelho */
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  /* text-gray-400 */
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.social {
  display: flex;
  gap: 1rem;
}

.social a {
  color: #9ca3af;
  transition: color 0.3s;
}

.social a:hover {
  color: #ef4444;
}

.footer-grid h4 {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-grid li {
  margin-bottom: 0.5rem;
}

.footer-grid a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
}

.footer-grid a:hover {
  color: #fff;
}

/* Contact */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.9rem;
}

.icon {
  width: 20px;
  height: 20px;
}

.icon.red {
  color: #ef4444;
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid #1f2937;
  /* border-gray-800 */
  margin-top: 3rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-bottom p {
  color: #9ca3af;
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: #9ca3af;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

/* Responsividade */
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
