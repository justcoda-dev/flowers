<template>
  <div class='layout'>
    <Header class="header-animation" :navList="navList"
            :cartFullPrice="getCartFullPrice"
            :cart="getCart"
            :cartCount="getCartCount"
            :socialList="socialList"
    />
    <div class='content'>
      <Nuxt/>
    </div>
    <Footer
      :navList="navList"
      :socialList="socialList"
    />
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
        {id: 2, to: "/flower-pots", title: "Кімнатні рослини"},
        {id: 3, to: "/cart", title: "Корзина"}],
        // {id: 4, to: "/contacts", title: "Контакти"}],
      socialList: [
        {
          id: 1,
          name: "Facebook",
          link: "https://www.facebook.com/profile.php?id=100063916003238",
          icon: `${require(`assets/icons/facebook.png`)}`
        },
        {
          id: 2,
          name: "Instagram",
          link: "https://www.instagram.com/orch_flower/",
          icon: `${require(`assets/icons/instagram.png`)}`
        },
        {
          id: 3,
          name: "TikTok",
          link: "https://vm.tiktok.com/ZMFGNxaX2",
          icon: `${require(`assets/icons/tiktok.png`)}`
        }]
    }
  },
  computed: {
    ...mapGetters({
      getCart: "cart/getCart",
      getCartCount: "cart/getCartCount",
      getCartFullPrice: "cart/cartFullPrice"
    })
  },
}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  background: $mainBackground;
  margin: 25px;
  //position: relative;
  @media screen and (max-width: $mediaMWidth) {
    margin: 10px;
  }
  .header-animation {
    animation: ease-in-out 0.5s aniFromTop;
  }
  .content {
    flex: 1 0 auto;
  }
}
@keyframes aniFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
