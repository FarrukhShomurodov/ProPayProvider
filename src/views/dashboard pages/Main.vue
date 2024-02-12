<script setup>
import { ref } from "vue";
const label = ref(false);
const label2 = ref(false);
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

    <!-- Pay Phone Number -->
    <section class="section_container">
      <h3>Оплата мобильной связи</h3>
      <div class="pay_phone">
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
          <label for="phone_number" :class="{ label: label2 }"
            >Сумма к пополнению</label
          >
          <div class="d-flex row align-items-center justify-content-between">
            <input
              type="text"
              class="form-input phone_number"
              id="phone_number"
              placeholder="Введите сумму"
              @focus="label2 = true"
              @blur="label2 = false"
            />
            <button class="btn pay_btn">Оплатить</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Saved payment -->
    <section class="section_container">
      <div class="d-flex justify-content-between align-items-center">
        <h3>Сохраненные платежи</h3>
        <img
          src="../../assets/img/icons/next.svg"
          class="pointer"
          alt="next icon"
        />
      </div>
      <div class="saved_pay scrool d-flex row">
        <div class="type_pay_container">
          <img
            src="../../assets/img/pay type/mobiUz.png"
            alt="saved pay image"
          />
          <p>Some Name</p>
          <p>97 712 34 56</p>
        </div>
        <div class="type_pay_container">
          <img
            src="../../assets/img/pay type/mobiUz.png"
            alt="saved pay image"
          />
          <p>Some Name</p>
          <p>97 712 34 56</p>
        </div>
        <div class="type_pay_container">
          <img
            src="../../assets/img/pay type/mobiUz.png"
            alt="saved pay image"
          />
          <p>Some Name</p>
          <p>97 712 34 56</p>
        </div>

        <div class="type_pay_container">
          <img
            src="../../assets/img/pay type/mobiUz.png"
            alt="saved pay image"
          />
          <p>Some Name</p>
          <p>97 712 34 56</p>
        </div>
        <div class="type_pay_container">
          <img
            src="../../assets/img/pay type/mobiUz.png"
            alt="saved pay image"
          />
          <p>Some Name</p>
          <p>97 712 34 56</p>
        </div>
      </div>
    </section>

    <!-- Home -->
    <section class="section_container">
      <div class="d-flex justify-content-between align-items-center">
        <h3>Дома</h3>
        <img
          src="../../assets/img/icons/next.svg"
          class="pointer"
          alt="next icon"
        />
      </div>
      <div class="homes_loans scrool d-flex row">
        <div class="home_loan_container">
          <div class="d-flex row align-items-center">
            <img
              src="../../assets/img/pay type/mobiUz.png"
              alt="home image"
              wi
            />
            <p>Name Home 1234</p>
          </div>
          <p>Месяц: 1 880 000 сум</p>
          <div class="cyrcle"></div>
        </div>
        <div
          class="home_loan_container d-flex col align-items-center justify-content-center"
        >
          <button>
            <img src="../../assets/img/pay type/mobiUz.png" alt="home image" />
          </button>
          <p>Добавить дом</p>
        </div>
      </div>
    </section>

    <!-- Loan -->
    <section class="section_container">
      <div class="d-flex justify-content-between align-items-center">
        <h3>Займы</h3>
        <img
          src="../../assets/img/icons/next.svg"
          alt="next icon"
          class="pointer"
        />
      </div>
      <div class="homes_loans scrool d-flex row">
        <div class="home_loan_container">
          <div class="loan_info d-flex row align-items-center">
            <div class="cyrcle"></div>
            <p>Name Home 1234</p>
          </div>
          <p>Сумма: 1 880 000 сум</p>
          <p>Срок до: 12 мес. 2023</p>
        </div>
        <div class="home_loan_container">
          <div class="loan_info d-flex row align-items-center">
            <div class="cyrcle"></div>
            <p>Name Home 1234</p>
          </div>
          <p>Сумма: 1 880 000 сум</p>
          <p>Срок до: 12 мес. 2023</p>
        </div>
        <div class="home_loan_container">
          <div class="loan_info d-flex row align-items-center">
            <div class="cyrcle"></div>
            <p>Name Home 1234</p>
          </div>
          <p>Сумма: 1 880 000 сум</p>
          <p>Срок до: 12 мес. 2023</p>
        </div>
        <div class="home_loan_container">
          <div class="loan_info d-flex row align-items-center">
            <div class="cyrcle"></div>
            <p>Name Home 1234</p>
          </div>
          <p>Сумма: 1 880 000 сум</p>
          <p>Срок до: 12 мес. 2023</p>
        </div>
        <div
          class="home_loan_container d-flex col align-items-center justify-content-center"
        >
          <button>
            <img
              src="../../assets/img/pay type/mobiUz.png"
              alt="home image"
              wi
            />
          </button>
          <p>Создать заем</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
