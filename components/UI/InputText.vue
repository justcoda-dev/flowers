<template>
  <div class="input-text">
    <div
      class="input-text__wrapper"
      :class="{invalid}">
      <input
        @input="onInput"
        :placeholder="placeholder"
        class="input-text__input"
        type="text">
    </div>
    <span
      v-if="invalidText"
      class="input-text__help-text"
    >
      {{ invalidText }}
    </span>
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
  &__wrapper {
    position: relative;
    min-width: 170px;
    padding: 15px 10px;
    background: #ffffff;
    box-shadow: 0 0 5px #afadad;
  }

  &__input {
    width: 100%;
    padding-right: 10px;
    outline: none;
    border: none;
    font-size: 20px;
    color: #60666d;
    box-sizing: border-box;
    height: 100%;
  }

  &__help-text {
    color: red;
  }
}

.invalid {
  box-shadow: 0 0 5px red;
  color: red;
}
</style>
