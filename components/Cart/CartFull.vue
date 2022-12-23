<template>
  <div class="cart-full-wrapper">
    <ul class="cart-full" v-if="list.length">
      <li class="cart-full__item" v-for="product of list">
        <div class="cart-full__info">
          <img class="cart-full__item-image"
               :src="`https://api.kvitnychok.store${product.attributes?.image?.data?.attributes?.url}`"
               alt="">
          <div class="cart-full__item-description">
            <p class="cart-full__item-title">{{ product.attributes?.title }}</p>
            <p class="cart-full__item-count">Усього {{ product.attributes?.count }} шт x
              {{ product.attributes?.price }} грн</p>
          </div>
          <div class="cart-full__buttons-bar">
            <button @click="onPlusClick(product)" class="cart-full__btn">+</button>
            {{ product.attributes?.count }}
            <button @click="onMinusClick(product)" class="cart-full__btn">-</button>
          </div>
        </div>
      </li>
    </ul>
    <h2 v-else>Корзина пуста. Зробіть ваше замовлення</h2>

    <Form
      class="cart-full__form"
      @click="onSubmitForm"
      :cartIsNotEmpty="!!fullPrice"
      :loading="loading"
    />

    <p class="cart-full__item-total-price">
      Загальна вартість {{ fullPrice }} грн
    </p>
  </div>
</template>

<script>

import Form from "~/components/Form/Form";
import ButtonConfirm from "~/components/UI/ButtonConfirm";

export default {
  name: "CartFull",
  components: {Form, ButtonConfirm},
  props: {
    list: {
      type: Array,
      require: true
    },
    fullPrice: {
      type: Number,
      require: true
    },
    loading: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    onAcceptClick() {
      this.$router.push("/form")
    },
    onMinusClick(product) {
      this.$emit("minusClick", product)
    },
    onPlusClick(product) {
      this.$emit("plusClick", product)
    },
    onDeleteClick() {
      this.$emit("deleteClick")
    },
    onSubmitForm(props) {
      this.$emit("onForm", {user: props, cart: this.list, totalPrice: this.fullPrice})
    }
  },

}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.cart-full-wrapper {
  padding: 15px;
}

.cart-full {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  min-height: 50px;

  &__item {
    display: flex;
    padding: 10px;
    background: #ecf7f9;
    margin: 5px 0;
    border-radius: 5px;
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__buttons-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    position: center;
    border-radius: 5px;

  }

  &__item-description {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }

  &__item-count {

  }

  &__item-title {

  }

  &__form {

  }

  &__item-total-price {
    padding: 10px 0;
    font-weight: 600;
    font-size: 1.2rem;
    border-top: 1px solid #333;
  }

  &__btn {
    border: none;
    cursor: pointer;
    background: #c9c9c9;
    min-height: 20px;
    min-width: 20px;
    transition: .3s;
    opacity: .7;
    font-weight: 600;
    color: black;

    &:hover {
      background: #adadad;
    }
  }
}

</style>
