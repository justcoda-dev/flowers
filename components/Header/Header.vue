<template>
  <header class='header'>
    <div class='header__logo'>
      <div class='header__logo-text'>Знижка на 10 замовлення 15%</div>
      <div class='header__logo-image'><h2>КВІТНИЧОК</h2></div>
      <div class='header__logo-search'>_______search</div>
    </div>
    <div class='header__nav'>
      <ButtonIcon />
      <nav class='nav-list-desktop'>
        <NuxtLink
          class='nav-list-desktop__item'
          v-for='navItem of navList'
          :key='navItem.id'
          :to='navItem.attributes?.to'>
          {{ navItem.attributes?.title }}
        </NuxtLink>
      </nav>
      <div class='nav-list-mobile'></div>
      <ButtonIcon />
    </div>
  </header>
</template>

<script>
import ButtonIcon from '~/components/UI/ButtonIcon'

export default {
  name: 'Header',
  components: { ButtonIcon },
  props: {
    navList: {
      type: Array,
      require: true
    }
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
    background: $headerNavBackground;
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
</style>
