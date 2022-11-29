<template>
  <header class='header'>
    <div class='header__logo'>
      <div class='header__logo-text'>Знижка на 10 замовлення 15%</div>
      <div class='header__logo-image'><h2>КВІТНИЧОК</h2></div>
    </div>
    <div class='header__nav'>
      <ButtonHome v-if="!mobile" @click="onHomeButtonClick"/>
      <MobileNavMenu v-if="mobile" class="nav-list-mobile" :showToggle="onMobileButtonToggle"
                     :list="navList"/>
      <nav v-else class='nav-list-desktop'>
        <NuxtLink
          class='nav-list-desktop__item'
          v-for='navItem of navList'
          :key='navItem.id'
          :to='navItem.to'>
          {{ navItem.title }}
        </NuxtLink>

      </nav>
      <CartHeader :cartCount="cartCount" :productsList="cart"/>
    </div>
  </header>
</template>

<script>
import CartHeader from "~/components/Cart/CartHeader";
import MobileNavMenu from "~/components/MobileNavMenu/MobileNavMenu";
import ButtonCart from "~/components/UI/ButtonCart";
import ButtonHome from "~/components/UI/ButtonHome";
import ButtonIcon from '~/components/UI/ButtonIcon'
import {debounce} from "~/functions/debounce";

export default {
  name: 'Header',
  components: {CartHeader, ButtonCart, ButtonHome, MobileNavMenu, ButtonIcon},
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
    }
  },
  data: () => {
    return {
      mobile: false,
      showMobileMenu: false,
      debounceTime: 100,
      mobileMode: 900
    }
  },
  methods: {
    onMobileButtonToggle() {
      this.showMobileMenu = !this.showMobileMenu
    },
    windowsWidthWatching() {
      const debouncedFn = debounce(({target: {innerWidth}}) => {

        if (innerWidth < this.mobileMode) {
          this.mobile = true
        } else {
          this.mobile = false
        }
      }, this.debounceTime)
      window.addEventListener("resize", debouncedFn)
    },
    onHomeButtonClick() {
      this.$router.push("/")
    }

  },
  created() {

  },
  mounted() {
    this.windowsWidthWatching()
  }
}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.header {
  display: flex;
  flex-direction: column;

  // logo block
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85px;
    padding: 5px 10px;
    box-sizing: border-box;
  }

  &__logo-text {
    font-size: .9rem;
  }

  &__logo-image {

  }

  &__logo-search {

  }

  // navigation

  &__nav {
    display: flex;
    justify-content: space-between;
    background: $headerNavBackground;
    min-height: 50px;
  }

  &__cart {
    justify-self: flex-end;
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

  &__item {
    display: block;
    text-decoration: none;
    color: $headerFontColor;
    text-transform: uppercase;
    transition: .3s;
    font-weight: 500;
    padding: 30px 10px 25px 10px;

    &:hover {
      color: #333333;
    }
  }
}

.nav-list-mobile {
  padding: 0 20px;
}
</style>
