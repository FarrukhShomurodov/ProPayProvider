<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="sucess_payment">
    <div
      class="success_payment_info d-flex justify-content-center align-items-center col"
    >
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
      <p>Оплата проведена успешна</p>
      <h3><b>1 000 000.00 сум</b></h3>
      <p class="tx-center">
        1 000 000 сум списано с вашей карты <b>(** 3632)</b>, по счету
        <b>#INV-000001</b> и начислена <b>OOO ”PRO TECHNOLOGIES SC”</b>
      </p>
      <button>Смотреть счет</button>

      <div class="d-grid gap-10 tx-center success_pay_redirect">
        <p>Через 60 секунд вы вернетесь на сайт PRO PAY.</p>
        <router-link to="/main">Вернуться на Главную страницу</router-link>
      </div>
    </div>
    <p class="powered_by">Powered by PRO PAY</p>
  </div>
</template>

<style scoped></style>
