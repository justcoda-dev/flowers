<template>
  <div class="input-phone">
    <div class="input-phone__wrapper" :class="{invalid}">
      <input
        class="input-phone__input"
        type="number"
        maxlength="13"
        @input="onInput"
        inputmode="numeric"
        :placeholder="placeholder"
      >
    </div>
    <span
      v-if="invalidText"
      class="input-phone__help-text"
    >
      {{ invalidText }}
    </span>
  </div>
</template>

<script>
export default {
  name: "InputPhone",
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
    value(val) {
      const phoneNumberStart = val.startsWith("380")
      const phoneLength = val.length === 12
      if (phoneNumberStart && phoneLength) {
        this.$emit("change", this.value)
        this.invalidText = ""
        this.invalid = false
      } else {
        this.$emit("change", "")
        this.invalid = true
        this.invalidText = "Перевірте введений номер телефону (формат 380)"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='number'] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input-phone {
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
