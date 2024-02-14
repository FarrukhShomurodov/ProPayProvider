<script setup>
import { ref } from "vue";
import ConfirmNumber from "../components/ConfirmNumber.vue";

const confirmNumber = ref(false);

const card = ref("");
const card_month = ref("");
const card_year = ref("");
</script>

<template>
  <section class="payment_info">
    <section class="header d-flex row align-items-center ml-10">
      <img
        src="../assets/img/logo/pro_pay_logo.svg"
        alt="back icon"
        class="pointer"
      />
    </section>

    <section class="_body d-flex col justify-content-center align-items-center">
      <!-- auth -->
      <div v-if="!confirmNumber" class="auth d-flex col gap-15 w-100">
        <p class="d-flex align-items-center">
          <span class="line"></span>Войти или Зарегистрироваться<span
            class="line"
          ></span>
        </p>
        <div class="login_pro_id">
          <button class="btn btn-img-mr w-100" @click="$router.push('/proid-payment')">
            <p>Войти по</p>
            <img src="../assets/img/logo/pro_id_logo.svg" alt="" />
          </button>
          <span>+ 1% Кеш Бек Пользователям PRO ID</span>
        </div>

        <p class="d-flex align-items-center">
          <span class="line" style="width: 123px"></span>Оплата без
          регистрации<span class="line" style="width: 125px"></span>
        </p>
      </div>

      <!-- Payment without auth -->
      <div v-if="!confirmNumber" class="paymetn_without_auth_card_data d-flex col gap-10 w-100">
        <div class="d-flex row align-items-center justify-content-between">
          <h3>Данные карты</h3>
          <span
            style="color: #9b3795"
            v-if="
              card.toString().length === 1 &&
              card_month.toString().length === 2 &&
              card_year.toString().length === 4
            "
            >Name Surname</span
          >
        </div>
        <div class="card_info_input">
          <input
            type="number"
            class="form-input phone_number w-100"
            placeholder="1234 1234 1234 1234"
            v-model="card"
          />
          <div class="d-flex row">
            <input
              type="number"
              class="form-input phone_number card_month w-100"
              placeholder="12"
              style="border-radius: 0 0 0 10px !important"
              v-model="card_month"
            />
            <input
              type="number"
              class="form-input phone_number w-100"
              placeholder="2023"
              v-model="card_year"
            />
          </div>
        </div>
        <button @click="confirmNumber = true" class="modal-default-button-add-card mt-10">Оплатить</button>
      </div>

      <ConfirmNumber v-if="confirmNumber"/>
      <!-- Powered by -->
      <div
        class="d-flex row powered_by justify-content-between align-items-center w-100"
      >
        <div class="d-flex row justify-content-between align-items-center">
          <img src="../assets/img/icons/block.svg" alt="" />
          <p class="ml-5">Зашифровано</p>
        </div>
        <h3>Powered by PRO PAY</h3>
      </div>
    </section>

  </section>
</template>

<style scoped></style>
