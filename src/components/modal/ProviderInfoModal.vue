<script setup>
const emit = defineEmits();

const close = () => emit("close");
</script>

<template>
  <div>
    <transition name="modal-entire">
      <div class="modal-mask">
        <div class="modal_wrapper_from_right">
          <div class="modal_container_from_right">
            <div class="header_modal_from_right">
              <img
                src="../../assets/img/icons/exit.svg"
                @click="close"
                alt="exit icon"
                class="pointer"
              />
              <h3>Подробнее</h3>
            </div>
            <div class="_body provider_deteils_modal">
              <ul class="w-100 d-flex col gap-15 mt-30">
                <li>
                  <span>Провайдер</span>
                  <img src="../../assets/img/logo/pro_crm.svg" alt="back icon" />
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
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
