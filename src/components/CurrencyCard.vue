<template>
  <div class="currency-card">
    <div class="currency-card__wrapper">
      <div class="currency-card__header">
        <span class="currency-card__header--type">{{ currencyType }}</span>
        <span class="currency-card__header--value">{{ total }}</span>
      </div>
      <span class="currency-card__rate">1 USD = {{ currencyType }} {{ currencyValue}}</span>
    </div>
    <b-button class="currency-card__button" variant="warning" @click="removeCurrency">(-)</b-button>
  </div>
</template>

<script src="./js/currency-card.js"></script>

<style lang="scss" scoped>
  .currency-card {
    background-color: cyan;
    width: 95%;
    &__wrapper {
      display: inline-block;
      background-color: whitesmoke;
      width: 90%;
      height: 80px;
      vertical-align: middle;
      padding: 2px;
    }
    &__header {
      position: relative;
      &--type {
        left: 0;
        text-transform: uppercase;
        font-weight: 600;
      }
      &--value {
        position: absolute;
        right: 15px;
        font-size: 1.3em;
      }
    }
    &__button {
      display: inline-block;
      width: 10%;
      height: 80px;
      vertical-align: middle;
    }
  }
</style>
