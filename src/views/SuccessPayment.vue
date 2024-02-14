<script setup>
import { RouterLink } from "vue-router";
import CashbackModal from "../components/modal/CashbackModal.vue";
import ProviderInfoModal from "../components/modal/ProviderInfoModal.vue";
import { ref } from "vue";

const ProviderInfo = ref(false);
</script>

<template>
  <div class="sucess_payment">
    <div
      class="success_payment_info d-flex justify-content-center align-items-center col"
    >
      <img src="../assets/img/icons/success.svg" alt="success icon" />
      <p>Оплата проведена успешна</p>
      <h3><b>1 000 000.00 сум</b></h3>
      <p class="tx-center">
        1 000 000 сум списано с вашей карты <b>(** 3632)</b>, по счету
        <b>#INV-000001</b> и начислена <b>OOO ”PRO TECHNOLOGIES SC”</b>
      </p>
      <button @click="ProviderInfo = true">Смотреть счет</button>

      <div class="d-grid gap-10 tx-center success_pay_redirect">
        <p>Через 60 секунд вы вернетесь на сайт PRO PAY.</p>
        <router-link to="/main">Вернуться на Главную страницу</router-link>
      </div>
    </div>
    <p style="position: absolute; bottom: 4%">Powered by PRO PAY</p>
  </div>

  <CashbackModal />
  <ProviderInfoModal v-if="ProviderInfo" @close="ProviderInfo = false" />
</template>

<style scoped></style>
