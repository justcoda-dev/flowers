<template>
  <div class='layout'>
    <Header :nav-list='navList' :cart="getCart" :cartCount="getCartCount"/>
    <div class='content'>
      <Nuxt/>
    </div>
    <Footer :socialList="socialList"/>
  </div>
</template>

<script>
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'

import {mapGetters} from 'vuex'

export default {
  name: 'default',
  components: {Footer, Header},
  data: () => {
    return {
      navList: [
        {id: 1, to: "/flower-pots", title: "Вазони"},
        {id: 2, to: "/services", title: "Послуги"},
        {id: 3, to: "/cart", title: "Корзина"},
        {id: 4, to: "/contacts", title: "Контакти"}],
      socialList: []
    }
  },
  computed: {
    ...mapGetters({getCart: "cart/getCart", getCartCount: "cart/getCartCount"})
  },
  async created() {
    try {
      // const {data: navList} = await this.$axios.$get('nav-items')
      const {data: socialList} = await this.$axios.$get('socials?populate=icon')
      // this.navList = navList
      this.socialList = socialList
    } catch (e) {
      console.error("default layout error:", e)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: $mainBackground;
  margin: 25px;
  position: relative;

  .content {
    flex: 1 0 auto;
  }
}
</style>
