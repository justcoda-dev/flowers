<template>
  <div class="cart">
    <CartFull
      v-if="!success"
      @minusClick="minusProduct"
      @plusClick="addProduct"
      :fullPrice="cartFullPrice"
      :list="getCart"
      @onForm="onForm"
    />

    <div class="success" v-else>
      <Title :type="'h4'" :style="{color:'black', margin:' 100px auto', textAlign:'center'}">
        Дякуємо за замовлення!
      </Title>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CartFull from "~/components/Cart/CartFull";
import Title from "~/components/UI/Title";

export default {
  name: "index",
  components: {Title, CartFull},
  data: () => {
    return {
      success: false
    }
  },
  methods: {
    ...mapActions({
      minusProduct: "cart/minusProduct",
      addProduct: "cart/addProduct",
      cleanCart: "cart/cleanCart"
    }),
    async onForm(data) {
      this.success = true
      this.cleanCart()
      try {
        const response = await this.$axios.post("https://mail.kvitnychok.store/send-email", {data})
        console.log(response)
      } catch (e) {
        console.error(e)
      }

    }
  },
  computed: {
    ...mapGetters({
      getCart: "cart/getCart",
      cartFullPrice: "cart/cartFullPrice",
      cartCount: "cart/getCartCount"
    })
  }
}
</script>

<style lang="scss" scoped>
.success {
  height: 50vh;
}
</style>
