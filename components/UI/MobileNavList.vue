<template>
  <ul class="mobile-nav-list">
    <li class="mobile-nav-list__item" @click="onNavItemClick" v-for="item of list" :key="item.id">
      <NuxtLink
        class="mobile-nav-list__item-src"
        :to="item.to">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MobileNavList",
  props: {
    list: {
      type: Array,
      require: true
    },
  },
  methods: {
    onNavItemClick() {
      this.$emit("click", false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  color: $white;
  list-style: none;
  font-size: clamp(2rem, 2vw, 3rem);

  &__item {
    cursor: pointer;
    z-index: 1;
    transition: .3s;
    text-transform: uppercase;
    padding: 5px;

  }

  &__item-src {
    color: $fontColorMain;
    text-decoration: none;

  }
}
</style>
