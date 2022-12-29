<template>
  <div class="cart">
    <CartFull
      :loading="loading"
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
      success: false,
      loading: false
    }
  },
  methods: {
    ...mapActions({
      minusProduct: "cart/minusProduct",
      addProduct: "cart/addProduct",
      cleanCart: "cart/cleanCart"
    }),
    async onForm(data) {
      try {
        this.loading = true
        const response = await this.$axios.post("https://mail.kvitnychok.store/send-email", {data})
        if (response.status === 200) {
          this.success = true
          this.cleanCart()
          this.loading = false
        }
      } catch (e) {
        this.loading = false
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
@import "assets/variables";

.cart {

}

.success {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
</style>
