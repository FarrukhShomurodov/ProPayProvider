<script setup>
import { ref } from "vue";
import PayFor from "@/components/modals/PayFor.vue";

const showPayFor = ref(false);
</script>

<template>
  <PayFor v-if="showPayFor" @close="showPayFor = false" />

  <h3>Мобильные операторы</h3>
  <div class="type_pay_main">
    <button
      class="type_pay type_pay_container pay_type_item"
      @click="showPayFor = true"
    >
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
    </button>
    <button class="type_pay type_pay_container pay_type_item" @click="">
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
    </button>
    <button class="type_pay type_pay_container pay_type_item" @click="">
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
    </button>
    <button class="type_pay type_pay_container pay_type_item" @click="">
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
    </button>
    <button class="type_pay type_pay_container pay_type_item" @click="">
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
    </button>
    <button class="type_pay type_pay_container pay_type_item" @click="">
      <img src="../../../assets/img/pay type/mobiUz.png" alt="mobiUz image" />
    </button>
  </div>
</template>

<style scoped></style>
