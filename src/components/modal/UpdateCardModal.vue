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
              <h3>Добавить карту</h3>
            </div>
            <div class="d-flex col section_container add_new_card_modal mt-10">
              <div class="cards_con d-flex col justify-content-between gap-10">
                <div class="d-flex col">
                  <div
                    class="d-flex justify-content-between align-items-center row"
                  >
                    <img
                      src="../../assets/img/pay type/mobiUz.png"
                      alt="saved pay image"
                      width="45px"
                    />
                    <img
                      src="../../assets/img/pay type/mobiUz.png"
                      alt="saved pay image"
                      width="45px"
                    />
                  </div>
                  <div class="d-flex justify-content-between row mt-10">
                    <h4><span>1 234 567.89</span> сум</h4>
                    <div>
                      <p class="extra_name">extra name</p>
                      <p style="margin-left: 10px; margin-top: 10px">06/26</p>
                    </div>
                  </div>
                </div>
                <div class="d-flex col gap-10">
                  <p>NAME SURNAME</p>
                  <div
                    class="d-flex justify-content-between align-items-center row"
                  >
                    <p class="card_number">**** **** **** ****</p>
                  </div>
                </div>
              </div>
              <section class="section_container mt-30">
                <h3>Название карты</h3>
                <input
                  type="text"
                  class="form-input phone_number w-100"
                  placeholder="Введите имя карты "
                />
              </section>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button-add-card mt-20">
                    Сохранить изменения
                </button>

                <button class="modal-default-button-add-card mt-10" style="color: #FF0000;">
                    Удалить карту
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
