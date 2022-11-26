<template>
  <div @click="onClick" class="button-home">
    <img
      class="button-home__image"
      src="http://localhost:1337/uploads/home_d5e13be5ae.png?updated_at=2022-11-26T11:24:50.089Z"
      alt="">
  </div>
</template>

<script>
export default {
  name: "ButtonHome",
  methods: {
    onClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
.button-home {
  width: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &__image {
    width: 100%;
  }
}
</style>
