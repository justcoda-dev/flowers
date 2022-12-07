<template>
  <div class="mobile-menu">
    <MobileButton :checkedProp="showMenu" @change="showToggle" class="mobile-menu__button"/>
    <div v-if="showMenu" class="mobile-menu__nav-list-background">
      <MobileNavList @click="onMenuItemClick" :list="list" class="mobile-menu__nav-list"/>
    </div>
  </div>
</template>

<script>

import MobileButton from "@/components/UI/MobileButton";
import MobileNavList from "@/components/UI/MobileNavList";

export default {
  name: "MobileNavMenu",
  components: {MobileNavList, MobileButton},
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data: () => {
    return {
      showMenu: false,
    }
  },
  methods: {
    showToggle() {
      this.showMenu = !this.showMenu
    },
    onMenuItemClick() {
      this.showMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.mobile-menu {
  z-index: 10;
  &__nav-list-background {
    position: fixed;
    height: calc(100vh + 30px);
    width: calc(100vw + 30px);
    left: 0;
    top: 0;
    overflow: hidden;

    &:before {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 100vh;
      background: #333333;
      opacity: .95;

    }
  }

  &__nav-list {
    position: relative;
    top: max(15%, 200px);
    z-index: 10;
  }

  &__button {
    position: relative;
    z-index: 12;
  }
}
</style>
