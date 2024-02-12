<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import SuccessPayment from "./dashboard pages/payment items/SuccessPayment.vue"

const successPayment = false;
</script>

<template>
  <Header></Header>
  <Navbar></Navbar>
  <section class="d-flex justify-content-center content">
    <RouterView />
  </section>

  <SuccessPayment v-if="successPayment"></SuccessPayment>

</template>

<style scoped></style>
