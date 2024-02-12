import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/dashboard pages/Main.vue'

// Payment components
import Payment from '../views/dashboard pages/Payment.vue'
import PaymentHistory from "../views/dashboard pages/PaymentHistory.vue"
import PaymentItems from "../views/dashboard pages/payment items/PaymentItems.vue"

// Card components
import Cards from "../views/dashboard pages/Cards.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
      children: [
          {
            path: '/payment-items',
            name: 'payment-items',
            component: PaymentItems,
          }
      ]
    },
    {
      path: '/payment-history',
      name: 'payment-history',
      component: PaymentHistory,
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
    },
  ]
})

export default router
