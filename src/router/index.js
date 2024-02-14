import { createRouter, createWebHistory } from 'vue-router'
import PaymentInfo from "../views/PaymentInfo.vue"
import ProIdUserPayment from "../views/ProIdUserPayment.vue"
import SuccessPayment from "../views/SuccessPayment.vue" 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'payment-info',
      component: PaymentInfo,
    },
    {
      path: '/proid-payment',
      name: 'pro-id-user-payment',
      component: ProIdUserPayment
    },
    {
      path: '/success-payment',
      name: 'success-payment',
      component: SuccessPayment
    }
  ]
})

export default router
