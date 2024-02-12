<script setup>
import { useRouter, RouterView } from "vue-router";
import { ref } from "vue";
</script>

<template>
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

    <!-- Payment History -->
    <section class="section_container">
      <div class="statistics">
        <div class="d-flex justify-content-between align-items-center">
          <h3>Статистика</h3>
          <button class="btn btn-img-mr">
            Фильтр
            <img src="../../assets/img/icons/next.svg" alt="filtr icon" />
          </button>
        </div>
        <div class="mt-10 d-flex justify-content-between align-items-center">
          <button class="btn">По всем картам</button>
          <button class="btn">01.01.2023 - 30.01.2023</button>
          <button class="btn">Все категории</button>
        </div>
        <div
          class="mt-10 d-flex justify-content-between align-items-center row gap-10"
        >
          <div class="transaction_con">
            <div class="d-flex justify-content-between align-items-center">
              <p style="color: #039500">Приход</p>
              <div class="cyrcle"></div>
            </div>
            <p class="mt-5">22 400 000 сум</p>
          </div>
          <div class="transaction_con">
            <div class="d-flex justify-content-between align-items-center">
              <p style="color: #ff0000">Расход</p>
              <div class="cyrcle"></div>
            </div>
            <p class="mt-5">22 400 000 сум</p>
          </div>
        </div>
      </div>

      <!-- Tranzaction -->
      <div class="mt-10 d-flex col">
        <h3>Транзакции</h3>
        <div>
          <p>02 янв. 2023</p>

          <div
            class="transaction_con transaction_con_consumption mt-5 d-flex justify-content-between align-items-center row"
          >
            <img
              src="../../assets/img/pay type/mobiUz.png"
              alt="saved pay image"
              width="80px"
              height="60px"
              class="transaction_image_to"
            />
            <div class="d-flex col w-100 gap-10 ml-10">
              <div class="d-flex justify-content-between align-items-center row">
                <p>Оплата за номер телеф...</p>
                <button>Category</button>
              </div>
              <div class="d-flex justify-content-between align-items-center row">
                <p style="color: black;">17:48</p>
                <div class="d-flex justify-content-between align-items-center row">
                  <img
                    src="../../assets/img/pay type/mobiUz.png"
                    alt="saved pay image"
                    width="25px"
                    height="17px"
                  />
                  <p class="ml-5">Name Card</p>
                </div>
                <p style="color: #9B3795;">+ 200 000 сум</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
