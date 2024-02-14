<script setup>
import { ref } from "vue";
import UpdateCardModal from "./UpdateCardModal.vue"
const emit = defineEmits();

const close = () => emit("close");

const UpdateCard = ref(false);
</script>

<template>
  <UpdateCardModal v-if="UpdateCard" @close="UpdateCard = false"/>
  <div v-else>
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
            <div class="d-flex col section_container user_cards mt-10">
              <div
                class="cards_con d-flex col justify-content-between mt-10 gap-10"
              >
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
                    <button class="extra_name" @click="UpdateCard = true">extra name</button>
                  </div>
                </div>
              </div>
              <div
                class="cards_con d-flex col justify-content-between mt-10 gap-10"
              >
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
                    <button class="extra_name">extra name</button>
                  </div>
                </div>
              </div>
              <div
                class="cards_con d-flex col justify-content-between mt-10 gap-10"
              >
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
                    <button class="extra_name">extra name</button>
                  </div>
                </div>
              </div>
              <div
                class="cards_con d-flex col justify-content-between mt-10 gap-10"
              >
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
                    <button class="extra_name">extra name</button>
                  </div>
                </div>
              </div>
              <div
                class="cards_con d-flex col justify-content-between mt-10 gap-10"
              >
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
                    <button class="extra_name">extra name</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div
                class="cards_con d-flex justify-content-center align-items-center col gap-10 add_card_bnt_modal mt-10"
                v-if="!cards"
              >
                <img
                  src="../assets/img/logo/pro_pay_logo.svg"
                  alt="saved pay image"
                  width="45px"
                />
                <button class="btn add_new_card" @click="cards = true">
                  Добавить Новую Карту
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
