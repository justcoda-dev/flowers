<template>
  <input @input="onInput" :placeholder="placeholder" class="input-text" type="text">
</template>

<script>
export default {
  name: "InputText",
  props: {
    placeholder: {
      type: String,
      require: false
    }
  },
  methods: {
    onInput({target: {value}}) {
      this.$emit("input", value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-text {
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-size: 20px;
  color: #60666d;

  padding: 15px 10px;
  background: #ffffff;
  box-shadow: 0 0 5px #afadad;
}
</style>
