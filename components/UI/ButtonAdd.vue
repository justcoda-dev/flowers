<template>
  <button @click="onClick" class="button-add">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "ButtonAdd",
  methods: {
    onClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.button-add {
  background: $buttonRed;
  border: none;
  //text-transform: uppercase;
  color: $white;
  font-size: 1rem;
  border-radius: 999px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
