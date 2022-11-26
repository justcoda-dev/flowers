<template>
  <button @click="onClick" class="button-green">
    <slot/>
  </button>
</template>

<script>
export default {

  name: "ButtonGreen",
  methods: {
    onClick() {
      this.$emit("click")
    }
  }

}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.button-green {
  border: none;
  background: $green;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: .3s;
  color: $borderColor;
  opacity: .8;

  &:hover {
    color: $white;
    opacity: 1;
  }
}
</style>
