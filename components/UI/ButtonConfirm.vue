<template>
  <button :disabled="disabled" class="button-confirm" @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "ButtonConfirm",
  props: {
    disabled: {
      type: Boolean,
      require: false
    }
  },
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
  &:disabled {
  opacity: .5;
  }
}
</style>
