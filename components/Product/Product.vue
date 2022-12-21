<template>
  <div v-if="productIsCome" class="product" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <div class="product__image" @click="onImageClick">
      <img
        :src="`https://api.kvitnychok.store${product.attributes?.image?.data?.attributes?.url}`"
        alt="#">
    </div>
    <div class="product__text-wrapper">
      <NuxtLink :to="`/flower-pots/product/${product.id}`" class="product__title">
        {{ product.attributes?.title }}
      </NuxtLink>
      <p class="product__price">{{ product.attributes?.price }} грн</p>
    </div>
    <!--    <p class="product__count">{{ product.attributes?.count }} шт</p>-->
    <ButtonAdd @click="onAddProduct" v-if="hover || mobile" :class="{'product__button':!mobile}">
      Додати в корзину
    </ButtonAdd>
    <AddedStatus v-if="added" :product="product"/>
  </div>
  <Loading v-else/>
</template>

<script>
import AddedStatus from "~/components/UI/AddedStatus";
import ButtonAdd from "~/components/UI/ButtonAdd";
import Loading from "~/components/UI/Loading";
import {debounce} from "~/functionsProject/debounce";

export default {
  name: "Product",
  components: {Loading, AddedStatus, ButtonAdd},
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  data: () => {
    return {
      hover: false,
      mobile: false,
      mobileMode: 900,
      added: false
    }
  },
  computed: {
    productIsCome() {
      return Object.keys(this.product).length
    }
  },
  methods: {
    onMouseOver() {
      this.hover = true
    },
    onMouseLeave() {
      this.hover = false
    },
    onAddProduct() {
      this.$emit("addProduct", this.product)
      this.added = true
      setTimeout(() => {
        this.added = false
      }, 500)
    },
    onImageClick() {
      console.log("click")
      this.$router.push(`/flower-pots/product/${this.product.id}`)
    },
    windowsWidthWatching() {
      const debouncedFn = debounce(({target: {innerWidth}}) => {
        if (innerWidth < this.mobileMode) {
          this.mobile = true
        } else {
          this.mobile = false
        }
      }, this.debounceTime)
      if (window.innerWidth < this.mobileMode) {
        this.mobile = true
      }
      window.addEventListener("resize", debouncedFn)
    }
  },
  mounted() {
    this.windowsWidthWatching()
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.product {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid $bodyBackground;
  border-radius: 5px;
  max-width: 200px;

  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
      min-height: 140px;
      min-width: 120px;
    }

    &:hover {
      &:before {
        position: absolute;
        content: "";
        background: white;
        width: 100%;
        height: 100%;
        opacity: 50%;
      }
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 100px;
    min-height: 100px;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    transition: .3s;
    color: $sliderText;

    &:hover {
      color: $sliderTitle;
    }
  }

  &__price {
    text-align: center;
    margin: 10px;
  }

  &__count {
  }

  //&__hover-menu {
  //  position: absolute;
  //  height: 100%;
  //  width: 100%;
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //  justify-content: flex-end;
  //    &:before {
  //      content: "";
  //      background: white;
  //      width: 100%;
  //      height: 100%;
  //      opacity: 50%;
  //    }
  //}

  &__button {
    position: absolute;
    bottom: 5px;
  }
}
</style>
