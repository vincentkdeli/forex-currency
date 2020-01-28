<template>
  <div class="home">
    <div class="home__container">
      <div class="home__header">
        <span class="home__header__currency">USD - United States Dollars</span>
        <span class="home__header__type">USD</span>
        <input type="number"
               class="home__header__input"
               v-model="amount">
      </div>
      <hr>
      <div class="home__content"
           v-for="i in dataset"
           :key="i.type">
        <currency-card :amount="amount"
                       :currencyType="i.type"
                       :currencyValue="i.value"
                       @removeCurrency="removeCurrency">
        </currency-card>
      </div>
      <div class="home__footer">
        <button class="home__footer__button"
                v-if="!isFormActive"
                @click="toggleForm">
          (+) Add More Currencies
        </button>
        <div class="home__footer__form"
             v-if="isFormActive">
          <b-form-select class="home__footer__form--choices"
                         v-model="currency"
                         :options="supportedCurrencies">
          </b-form-select>
          <b-button variant="info"
                    class="home__footer__form--button"
                    @click="submitForm">
            Submit
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/home.js"></script>

<style lang="scss" scoped>
  .home {
    background-color: #999;
    height: 100vh;
    width: 100vw;
    &__container {
      background-color: #FD5E53;
      width: 70%;
      margin: auto;
      padding: 20px;
    }
    &__header {
      color: #FFF;
      &__currency {
        display: block;
        font-style: italic;
        font-weight: 600;
      }
      &__type {
        display: inline-block;
        font-weight: bold;
      }
      &__input {
        float: right;
        background-color: transparent;
        border: 0.5px solid #0095DA;
        font-size: 1.3rem;
        color: #FFF;
      }
    }
    &__content {
      margin-top: 10px;
    }
    &__footer {
      margin-top: 10px;
      &__button {
        width: 95%;
        padding: 5px;
      }
      &__form {
        width: 95%;
        &--choices {
          width: 70%;
        }
        &--button {
          width: 30%;
        }
      }
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
