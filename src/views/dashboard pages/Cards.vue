<script setup>
import { useRouter } from "vue-router";
import AddNewCard from "../../components/modals/AddNewCard.vue"
import { ref } from "vue";

const showAddNewCard = ref(false);
</script>

<template>

  <AddNewCard v-if="showAddNewCard" @close="showAddNewCard = false" />

  <section class="d-flex col">
    <div class="user_data">
      <h3>Ассаламу алейкум, Имя Фамилия</h3>
      <p class="tx-end">Ваш баланс по картам:</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-img-mr">
          Карты <img src="../../assets/img/icons/next.svg" alt="next icon" />
        </button>
        <p><span>999 999 999</span> сум</p>
      </div>
    </div>

    <section class="section_container">
      <div class="statistics d-flex justify-content-between align-items-center">
        <h3>Карты</h3>
        <button class="btn">
          <img src="../../assets/img/icons/next.svg" alt="filtr icon" />
        </button>
      </div>
      <div class="cards_section">
        <div class="cards_con d-flex col justify-content-between gap-10">
          <div class="d-flex col">
            <div class="d-flex justify-content-between align-items-center row">
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
              <p class="extra_name">extra name</p>
            </div>
          </div>
          <div class="d-flex col gap-10">
            <p>NAME SURNAME</p>
            <div class="d-flex justify-content-between align-items-center row">
              <p class="card_number">8600 14** **** 3632</p>
              <button class="btn">extra name</button>
            </div>
          </div>
        </div>
        <div class="cards_con d-flex col justify-content-between gap-10">
          <div class="d-flex col">
            <div class="d-flex justify-content-between align-items-center row">
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
              <p class="extra_name">extra name</p>
            </div>
          </div>
          <div class="d-flex col gap-10">
            <p>NAME SURNAME</p>
            <div class="d-flex justify-content-between align-items-center row">
              <p class="card_number">8600 14** **** 3632</p>
              <button class="btn">extra name</button>
            </div>
          </div>
        </div>
        <div
          class="cards_con d-flex justify-content-center align-items-center col gap-10"
        >
          <img
            src="../../assets/img/pay type/mobiUz.png"
            alt="saved pay image"
            width="45px"
          />
          <button class="btn add_new_card" @click="showAddNewCard = true">Добавить Новую Карту</button>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
