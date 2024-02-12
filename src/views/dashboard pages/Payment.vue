<script setup>
import { useRouter, RouterView } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const currentRouterName = router.currentRoute._value.name;

const showPaymentServices = ref(currentRouterName !== "payment-items");

router.afterEach((to) => {
  showPaymentServices.value = to.name !== "payment-items";
});
</script>

<template>
  <section class="d-flex col">
    <div class="user_data">
      <h3>Ассаламу алейкум, Имя Фамилия</h3>
      <p class="tx-end">Ваш баланс по картам:</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-img-mr">
          Карты <img src="../../assets/img/icons/next.svg" alt="next icon" />
        </button>
        <p><span>999 999 999</span> сум</p>
      </div>
    </div>

    <!-- Payment items view -->
    <section class="section_container" v-if="!showPaymentServices">
      <RouterView />
    </section>

    <!-- Payment Phone Number -->
    <section class="section_container" v-if="showPaymentServices">
      <h3>Оплата за сервисы</h3>
      <div class="type_pay_main">
        <button
          class="type_pay type_pay_container"
          @click="router.push({ name: 'payment-items' })"
        >
          <p>Мобильные операторы</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Гос.платежи и ГСБДД (ГАИ)</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Мобильные операторы</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Гос.платежи и ГСБДД (ГАИ)aaaaaaaaaaaaaaaaaa</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Мобильные операторы</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Гос.платежи и ГСБДД (ГАИ)</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Мобильные операторы</p>
        </button>
        <button class="type_pay type_pay_container">
          <p>Гос.платежи и ГСБДД (ГАИ)</p>
        </button>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
