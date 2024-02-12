<script setup>
import { ref } from "vue";

const label = ref(false);
const label2 = ref(false);

const emit = defineEmits();

const close = () => emit("close");
</script>

<template>
  <div>
    <transition name="modal-entire">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="header_modal">
              <div class="d-flex aligin-items-center">
                <img src="../../assets/img/icons/star.svg" alt="exit icon" />
                <h3 class="provider">Mobi Uz</h3>
              </div>
              <img
                src="../../assets/img/icons/exit.svg"
                @click="close"
                alt="exit icon"
              />
            </div>
            <div
              class="d-flex justify-content-center align-items-center col pay_phone"
            >
              <img
                src="../../assets/img/pay type/mobiUz.png"
                alt="Payment Image"
                width="100px"
              />
              <div class="d-flex col">
                <label for="phone_number" :class="{ label: label }"
                  >Номер телефона</label
                >
                <input
                  type="text"
                  class="form-input phone_number"
                  id="phone_number"
                  placeholder="+998 (--) --- -- -- "
                  @focus="label = true"
                  @blur="label = false"
                />
              </div>
              <div class="d-flex col">
                <label for="phone_number2" :class="{ label: label2 }"
                  >Сумма к оплате</label
                >
                <input
                  type="text"
                  class="form-input phone_number"
                  id="phone_number2"
                  placeholder="от 1 000 до 500 000 сум"
                  @focus="label2 = true"
                  @blur="label2 = false"
                />
              </div>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button">Оплатить</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
