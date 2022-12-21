<template>
  <div class="input-phone-wrapper">
    <input @input="onInput" :placeholder="placeholder" class="input-phone"
           :class="{invalid}"
           type="number"
           maxlength="13"
    >
    <span v-if="invalidText" class="help-text">{{ invalidText }}</span>
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

.input-phone-wrapper {

}

.help-text {
  color: red;
}

.input-phone {
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

.invalid {
  box-shadow: 0 0 5px red;
  color: red;
}
</style>
