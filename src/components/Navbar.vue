<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isActive = ref({
  main: true,
  payment: false,
  paymentHistory: false,
  cards: false,
  home: false,
  loan: false,
  sevice: false,
  support: false,
  help: false,
});

function active(val) {
  for (const key in isActive.value) {
    isActive.value[key] = false;
  }

  isActive.value[val] = true;
}
</script>

<template>
  <div class="nav_position">
    <nav class="navbar__menu">
      <swiper class="navbar__list d-flex col aligin-items-center">
        <swiper-slide
          class="navbar__link"
          @click="active('main')"
          :class="{ active: isActive.main }"
        >
          <router-link to="/main">Главная</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('payment')"
          :class="{ active: isActive.payment }"
        >
          <router-link to="/payment">Оплата</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('paymentHistory')"
          :class="{ active: isActive.paymentHistory }"
        >
          <router-link to="/payment-history">История платежей</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('card')"
          :class="{ active: isActive.card }"
        >
          <router-link to="/cards">Мои Карты</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('home')"
          :class="{ active: isActive.home }"
        >
          <router-link to="/payment">Мои Дома</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('loan')"
          :class="{ active: isActive.loan }"
        >
          <router-link to="/payment">Мои Займы</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('serice')"
          :class="{ active: isActive.serice }"
        >
          <router-link to="/payment">Услуги</router-link>
        </swiper-slide>
        <div class="border"></div>
        <swiper-slide
          class="navbar__link"
          @click="active('support')"
          :class="{ active: isActive.support }"
        >
          <router-link to="/payment">Поддержка</router-link>
        </swiper-slide>
        <swiper-slide
          class="navbar__link"
          @click="active('help')"
          :class="{ active: isActive.help }"
        >
          <router-link to="/payment">Справка</router-link>
        </swiper-slide>
      </swiper>
    </nav>
  </div>
</template>

<style scoped>
@import url("../assets/style/main.css");
</style>
