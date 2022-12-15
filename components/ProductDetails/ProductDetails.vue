<template>
  <div v-if="propsIsCome" class="product-details">
    <div class="product">
      <div class="product__image">
        <img
          :src="`https://api.kvitnychok.store${product.attributes?.image?.data?.attributes?.url}`"
          alt="#">
      </div>
      <div class="product__text-wrapper">
        <p class="product__title">
          {{ product.attributes?.title }}
        </p>
      </div>
    </div>
    <div class="text-block">
      <p class="text-block__price">
        Ціна {{ product.attributes?.price }} грн
      </p>
      <ButtonAdd
        class="text-block__button"
        @click="onAddProduct"
      >
        Додати в кошик
      </ButtonAdd>
      <div class="text-block__description">
        <Title type="h5" :style="{color:'black'}">Опис</Title>
        {{ product.attributes?.description }}
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAdd from "~/components/UI/ButtonAdd";
import Title from "~/components/UI/Title";

export default {
  name: "ProductDetails",
  components: {Title, ButtonAdd},
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  computed: {
    propsIsCome() {
      return Object.keys(this.product).length
    }
  },
  methods: {
    onAddProduct() {
      this.$emit("addToCart", this.product)
    },

  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.product-details {
  display: flex;
  padding: 40px;
  @media screen and (max-width: $mediaMWidth) {
    padding: 20px 10px;
    margin: auto;
  }
}

.product {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 50%;
  min-width: 280px;

  @media screen and (max-width: $mediaMWidth) {
    margin: auto;
  }

  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 500px;

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
      min-height: 140px;
      min-width: 120px;
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    margin: 10px;
  }

  &__price {
    text-align: center;
    margin: 10px;
  }

  &__count {
  }

  &__button {
    position: absolute;
    bottom: 0;
  }
}

.text-block {
  margin-left: 40px;
  max-width: 50%;

  &__price {
    font-size: 1.4rem;
  }

  &__button {
    margin: 20px 0;
  }

  &__description {

  }
}

</style>
