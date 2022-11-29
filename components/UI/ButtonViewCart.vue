<template>
  <button class="button-view-cart" @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "ButtonViewCart",
  methods: {
    onClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.button-view-cart {
  background: $white;
  border: 1px solid #ddd;
  text-transform: uppercase;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
