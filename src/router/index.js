import { createRouter, createWebHistory } from 'vue-router'

// IMPORTACIONES DINÁMICAS (Performance Tuning)
// Solo se descargan cuando el usuario entra a la URL
const Home = () => import('../views/Home.vue')
const Productos = () => import('../components/ProductsGrid.vue')
const AdminLogin = () => import('../views/Login.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/productos', name: 'Productos', component: Productos },
  { path: '/portal-gv-2026', name: 'Login', component: AdminLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Para que al cambiar de página siempre inicie arriba
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router