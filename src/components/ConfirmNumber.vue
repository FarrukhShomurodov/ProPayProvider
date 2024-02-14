<script setup>
import { ref } from "vue";

const otp = ref(["", "", "", "", "", ""]);

function handleInput(index) {
  let otpVal = otp.value[index - 1];

  if (otpVal.toString().length === 1) {
    focusNext(index);
  } else {
    otpVal = otpVal.toString().slice(-1);
    otp.value[index - 1] = otpVal;
  }
}

function handleKeyDown(index, event) {
  if (
    event.key === "Backspace" &&
    otp.value[index - 1].toString().length === 0
  ) {
    focusPrevious(index);
  }
}

function focusNext(index) {
  if (index < 6) {
    const nextIndex = index + 1;
    const inputField = document.getElementById(`otc-${nextIndex}`);
    inputField.focus();
  }
}

function focusPrevious(index) {
  if (index >= 2) {
    const prevIndex = index - 1;
    const inputField = document.getElementById(`otc-${prevIndex}`);
    inputField.focus();
  }
}
</script>

<template>
  <section class="confirm_number d-flex align-items-center col">
    <p class="tx-center">
      Для подтверждения оплаты мы выслали Проверочный код на номер (+998 90 ***
      ** 67), Введите его ниже для подтверждения.
    </p>
    <form
      @submit.prevent
      class="otc mt-20 gap-15 d-flex row align-items-center"
      name="one-time-code"
      action="#"
    >
      <img
        class="phone"
        src="../assets/img/icons/phone.svg"
        style="width: 23px; height: 26px"
        alt=""
      />
      <input
        v-for="i in 6"
        :key="i"
        ref="otcInput"
        v-model="otp[i - 1]"
        @input="handleInput(i)"
        @keydown="(event) => handleKeyDown(i, event)"
        type="number"
        inputmode="numeric"
        :placeholder="'_'"
        :id="'otc-' + i"
        maxlength="1"
        required
      />

      <img
        src="../assets/img/icons/correct.svg"
        class="correct-signal"
        alt=""
      />
    </form>
    <div class="w-100">
      <button class="modal-default-button-add-card mt-20 w-100">
        Оплатить
      </button>
      <button class="btn mt-10">Выслать код повторно.</button>
    </div>
  </section>
</template>

<style scoped></style>
