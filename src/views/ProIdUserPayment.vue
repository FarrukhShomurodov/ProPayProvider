<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import AddNewCardModal from "../components/modal/AddNewCardModal.vue";
import CardsModal from "../components/modal/CardsModal.vue";

const addNewCard = ref(false);
const cards = ref(false);
const cardsModal = ref(false);
const cashBack = ref(false);
</script>

<template>
  <AddNewCardModal v-if="addNewCard" @close="addNewCard = false" />
  <CardsModal v-if="cardsModal" @close="cardsModal = false" />

  <section class="payment_info">
    <section class="header d-flex row align-items-center ml-10">
      <img
        src="../assets/img/logo/pro_pay_logo.svg"
        alt="back icon"
        class="pointer"
      />
    </section>

    <section class="_body d-flex col justify-content-center align-items-center">
      <!-- Payment without auth -->
      <div class="paymetn_without_auth_card_data d-flex col gap-15 w-100">
        <div class="d-flex row align-items-center justify-content-between">
          <h3>
            {{
              cards
                ? "Выберите карту для оплаты"
                : "У Вас нет добавленных карт."
            }}
          </h3>
          <img
            src="../assets/img/icons/menu-dots-vertical.svg"
            alt="menu icon"
            class="menu_icon"
            @click="cardsModal = true"
          />
        </div>

        <!-- add new -->
        <div
          class="cards_con d-flex justify-content-center align-items-center col gap-10"
          v-if="!cards"
        >
          <img
            src="../assets/img/icons/add.svg"
            alt="add icon"
            width="45px"
          />
          <button class="btn add_new_card" @click="cards = true">
            Добавить Новую Карту
          </button>
        </div>

        <!-- exists card -->
        <Swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="[EffectCards]"
          class="mySwiper mt-30"
          v-if="cards"
        >
          <SwiperSlide>
            <div class="cards_con d-flex col justify-content-between gap-10">
              <div class="d-flex col">
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                </div>
                <div class="d-flex justify-content-between row mt-10">
                  <h4><span>1 234 567.89</span> сум</h4>
                  <p class="extra_name">extra name</p>
                </div>
              </div>
              <div class="d-flex col gap-10">
                <p>NAME SURNAME</p>
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <p class="card_number">8600 14** **** 3632</p>
                </div>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide>
            <div class="cards_con d-flex col justify-content-between gap-10">
              <div class="d-flex col">
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                </div>
                <div class="d-flex justify-content-between row mt-10">
                  <h4><span>1 234 567.89</span> сум</h4>
                  <p class="extra_name">extra name</p>
                </div>
              </div>
              <div class="d-flex col gap-10">
                <p>NAME SURNAME</p>
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <p class="card_number">8600 14** **** 3632</p>
                </div>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide>
            <div class="cards_con d-flex col justify-content-between gap-10">
              <div class="d-flex col">
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                </div>
                <div class="d-flex justify-content-between row mt-10">
                  <h4><span>1 234 567.89</span> сум</h4>
                  <p class="extra_name">extra name</p>
                </div>
              </div>
              <div class="d-flex col gap-10">
                <p>NAME SURNAME</p>
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <p class="card_number">8600 14** **** 3632</p>
                </div>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide>
            <div class="cards_con d-flex col justify-content-between gap-10">
              <div class="d-flex col">
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                  <img
                    src="../assets/img/logo/pro_pay_logo.svg"
                    alt="saved pay image"
                    width="45px"
                  />
                </div>
                <div class="d-flex justify-content-between row mt-10">
                  <h4><span>1 234 567.89</span> сум</h4>
                  <p class="extra_name">extra name</p>
                </div>
              </div>
              <div class="d-flex col gap-10">
                <p>NAME SURNAME</p>
                <div
                  class="d-flex justify-content-between align-items-center row"
                >
                  <p class="card_number">8600 14** **** 3632</p>
                </div>
              </div>
            </div></SwiperSlide
          >
        </Swiper>

        <!-- Cashback -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex row mt-10">
            <input type="checkbox" id="" @change="cashBack = !cashBack" />
            <p class="ml-5">Воспользоваться CASH BACK-ом</p>
          </div>
          <p v-if="cashBack">Доступно: <b>350 000</b> сум</p>
        </div>

        <input v-if="cashBack" type="number" class="form-input" />

        <!-- add card btn -->
        <button
          @click="
            cards ? $router.push('/success-payment') : (addNewCard = true)
          "
          class="modal-default-button-add-card mt-10"
        >
          {{ cards ? "Оплатить" : "Добавить Карту" }}
        </button>
      </div>

      <!-- Powered by -->
      <div
        class="d-flex row powered_by justify-content-between align-items-center w-100"
      >
        <div class="d-flex row justify-content-between align-items-center">
          <img src="../assets/img/icons/block.svg" alt="" />
          <p class="ml-5">Зашифровано</p>
        </div>
        <h3>Powered by PRO PAY</h3>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
