<template>
  <div class='layout'>
    <Header :nav-list='navList' :cartFullPrice="getCartFullPrice" :cart="getCart" :cartCount="getCartCount"/>
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
        {id: 1, to: "/", title: "Головна"},
        {id: 2, to: "/flower-pots", title: "Вазони"},
        {id: 3, to: "/cart", title: "Корзина"},
        {id: 4, to: "/contacts", title: "Контакти"}],
      socialList: [
        {
          id: 1,
          name: "Facebook",
          link: "facebook.com",
          icon: `${require(`assets/icons/icons8-facebook.svg`)}`
        },
        {
          id: 2,
          name: "Instagram",
          link: "instagram.com",
          icon: `${require(`assets/icons/icons8-instagram.svg`)}`
        },
        {
          id: 3,
          name: "TikTok",
          link: "tiktok.com",
          icon: `${require(`assets/icons/icons8-tiktok.svg`)}`
        }]
    }
  },
  computed: {
    ...mapGetters({getCart: "cart/getCart", getCartCount: "cart/getCartCount", getCartFullPrice:"cart/cartFullPrice"})
  },
  async created() {
    try {
      // const {data: navList} = await this.$axios.$get('nav-items')
      // const {data: socialList} = await this.$axios.$get('socials?populate=icon')
      // this.navList = navList
      // this.socialList = socialList
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
  @media screen and (max-width: 900px) {
    margin: 15px;
  }

  .content {
    flex: 1 0 auto;
  }
}
</style>
