<template>
  <header class='header'>
    <div class='header__logo'>
      <div class='header__logo-image'>
        <NuxtLink to="/">
          <img :src="require('static/logo.png')" alt="#">
        </NuxtLink>
      </div>
      <div class="header__social-wrapper">
        <div class="header__social">
          <SocialLink
            class="social__link"
            v-for="social of socialList"
            :key="social.id"
            :social="social"/>
        </div>
      </div>
    </div>
    <div class='header__nav'>
      <ButtonHome
        class="header__home-btn"
        @click="onHomeButtonClick"
      />
      <MobileNavMenu
        class="nav-list-mobile"
        :list="navList"
      />
      <nav class='nav-list-desktop'>
        <NuxtLink
          class='nav-list-desktop__item'
          v-for='navItem of navList'
          :key='navItem.id'
          :to='navItem.to'>
          {{ navItem.title }}
        </NuxtLink>
      </nav>
      <CartHeader
        class="header__cart"
        :cartCount="cartCount"
        :cartFullPrice="cartFullPrice"
        :productsList="cart"
      />

    </div>
  </header>
</template>

<script>
import CartHeader from "~/components/Cart/CartHeader";
import MobileNavMenu from "~/components/MobileNavMenu/MobileNavMenu";
import ButtonCart from "~/components/UI/ButtonCart";
import ButtonHome from "~/components/UI/ButtonHome";
import ButtonIcon from '~/components/UI/ButtonIcon'
import SocialLink from "~/components/Social/SocialLink";

export default {
  name: 'Header',
  components: {

    CartHeader, ButtonCart, ButtonHome, MobileNavMenu, ButtonIcon, SocialLink
  },
  props: {
    navList: {
      type: Array,
      require: true
    },
    cart: {
      type: Array,
      require: true
    },
    cartCount: {
      type: Number,
      require: false
    },
    cartFullPrice: {
      type: [String, Number],
      require: true
    },
    socialList: {
      type: Array,
      require: true
    }
  },
  data: () => {
    return {
      showMobileMenu: false,
      debounceTime: 100,
    }
  },
  methods: {
    onMobileButtonToggle() {
      this.showMobileMenu = !this.showMobileMenu
    },

    onHomeButtonClick() {
      this.$router.push("/")
    }

  },

}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.header {
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: $mediaMWidth) {
    position: fixed;
    height: 70px;
    z-index: 100;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
  }
  // logo block
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85px;
    padding: 5px 50px;
    box-sizing: border-box;
    @media screen and (max-width: $mediaMWidth) {
      display: none;
    }
  }


  &__social-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo-image {
    a {
      display: block;
    }

    img {
      height: 110px;
      width: 110px;
    }
  }

  &__social {

  }

  &__contacts {
    a {
      font-weight: 500;
      color: $fontColor;
    }
  }

  &__logo-search {

  }

  &__home-btn {
    @media screen and (max-width: $mediaMWidth) {
      display: none !important;
    }
  }

  // navigation

  &__nav {
    display: flex;
    justify-content: space-between;
    background: $headerNavBackground;
    min-height: 70px;

  }

  &__cart {


  }


}

.nav-list-desktop {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $headerNavListBackground;
  padding: 0;
  margin: 0;
  @media screen and (max-width: $mediaMWidth) {
    display: none;
  }

  &__item {
    display: block;
    position: relative;
    text-decoration: none;
    color: $headerFontColor;
    text-transform: uppercase;
    transition: .3s;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 30px 15px 25px 15px;

    &:after {
      display: block;
      position: absolute;
      top: 43%;
      left: 0;
      content: "";
      background: $headerFontColor;
      height: 14px;
      width: 1px;
      opacity: .5;
    }
  }

  & > &__item:first-child {
    &:after {
      display: none;
    }
  }
}

.nav-list-mobile {
  padding: 0 20px;
  @media screen and (min-width: $mediaMWidth) {
    display: none;
  }
}
</style>
