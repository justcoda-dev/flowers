<template>
  <div class="input-text-wrapper">
    <input @input="onInput"
           :placeholder="placeholder"
           class="input-text"
           :class="{invalid}"
           type="text">
    <span v-if="invalidText" class="help-text">{{ invalidText }}</span>
  </div>
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
  data: () => {
    return {
      invalid: false,
      invalidText: "",
      value: ""
    }
  },
  methods: {
    onInput({target: {value}}) {
      this.value = value
    }
  },
  watch: {
    value() {
      if (this.value.length > 3) {
        this.$emit("change", this.value)
        this.invalidText = ""
        this.invalid = false
      } else {
        this.invalid = true
        this.$emit("change", '')
        this.invalidText = "Введіть прізвище там ім'я"
      }
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

.help-text {
  color: red;
}

.invalid {
  box-shadow: 0 0 5px red;
  color: red;
}
</style>
