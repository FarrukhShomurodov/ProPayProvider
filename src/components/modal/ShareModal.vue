<script setup>
const emit = defineEmits();

const close = () => emit("close");

setTimeout(close, 2000)
</script>

<template>
  <section class="d-flex justify-content-center">
    <div class="link_copied">
      <p>Ссылка скопирована</p>
    </div>
  </section>
</template>

<style scoped></style>
