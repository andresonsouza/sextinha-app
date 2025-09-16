<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <h1>SextinhaApp</h1>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav">
          <a href="#home">Início</a>
          <a href="#menu">Cardápio</a>
          <a href="#deals">Promoções</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>

        <!-- Cart and Mobile Menu -->
        <div class="actions">
          <button class="cart-btn">
            <ShoppingCart class="icon" />
            <span class="cart-count">3</span>
          </button>

          <button class="menu-btn">
            <Menu class="icon" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ShoppingCart, Menu } from 'lucide-vue-next'
</script>

<style scoped>
/* HEADER BASE */
.header {
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 50;
}

/* CONTAINER */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* FLEX HEADER */
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

/* LOGO */
.logo h1 {
  color: #dc2626;
  /* vermelho */
  letter-spacing: -0.5px;
  font-weight: bold;
}

/* NAVIGATION */
.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: #374151;
  /* cinza */
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
}

.nav a:hover {
  color: #dc2626;
}

/* ACTIONS */
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* CART BUTTON */
.cart-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.3s;
}

.cart-btn:hover {
  background: #f1f1f1;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #dc2626;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* MENU BUTTON (MOBILE) */
.menu-btn {
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.4rem 0.75rem;
  transition: background 0.3s;
}

.menu-btn:hover {
  background: #f1f1f1;
}

/* ICONS */
.icon {
  width: 16px;
  height: 16px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
