<script setup>
import { RouterView } from "vue-router";
import ProviderInfo from "./views/ProviderInfo.vue";

</script>

<template>
  <div :class="{ 'd-flex row': $route.name !== 'success-payment' }">
    <ProviderInfo v-if="$route.name !== 'success-payment'"/>
    <RouterView />
  </div>
</template>

<style scoped></style>
