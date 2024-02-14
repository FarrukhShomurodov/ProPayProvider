<script setup>
import ProviderInfoModal from "../components/modal/ProviderInfoModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";

import { ref } from "vue";

const ProviderInfo = ref(false);
const Share = ref(false);
</script>

<template>
  <ProviderInfoModal
    v-if="ProviderInfo"
    @close="ProviderInfo = false"
  />

  <section class="provider_info">
    <section class="header d-flex row align-items-center ml-10 pointer">
      <img src="../assets/img/icons/back.svg" alt="back icon"/>
      <p class="ml-5">Назад к провайдеру</p>
    </section>
    <section class="_body d-flex col justify-content-center align-items-center">
      <!-- Provider Info -->
      <ul class="w-100 d-flex col gap-15">
        <li>
          <span>Провайдер</span>
          <img src="../assets/img/logo/pro_crm.svg" alt="back icon" />
        </li>
        <li>
          <span>Номер счета</span>
          <p>OOO ”PRO TECHNOLOGIES SC”</p>
        </li>
        <li>
          <span>Номер счета</span>
          <p>#INV-000001</p>
        </li>
        <li>
          <span>Сумма к оплате</span>
          <p>1 000 000.00 сум</p>
        </li>
      </ul>

      <!-- Options -->
      <div class="options d-flex row justify-content-around w-100">
        <div>
          <img src="../assets/img/icons/x.svg" alt="back icon" />
        </div>
        <div @click="Share = true">
          <img src="../assets/img/icons/share.svg" alt="back icon" />
        </div>
        <div @click="ProviderInfo = true">
          <img src="../assets/img/icons/menu-dots-vertical.svg" alt="back icon" />
        </div>
      </div>

      <!-- terms -->
      <div class="terms d-flex row">
        <a href="#">Условия Использования</a>
        <a href="#">Публичная оферта</a>
      </div>
    </section>
  </section>

  <ShareModal
    v-if="Share"
    @close="Share = false"
  />
</template>

<style scoped></style>
