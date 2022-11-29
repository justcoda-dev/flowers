<template>
  <button class="button-confirm" @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "ButtonConfirm",
  methods: {
    onClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.button-confirm {
  background: $buttonRed;
  border: 1px solid $headerNavListBackground;
  color: $white;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 3px;
}
</style>
