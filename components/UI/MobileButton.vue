<template>
  <label
    class="mobile-button-checkbox"
    :class="{checked:checkedProp}"
    @change="onChange"
  >
    <input
      class="mobile-button-checkbox__checkbox"
      type="checkbox"
    />
    <span class="mobile-button-checkbox__line"/>
    <span class="mobile-button-checkbox__line"/>
    <span class="mobile-button-checkbox__line"/>
  </label>


</template>
<script>
export default {
  name: "MobileButton",
  props: {
    checkedProp: {
      type: Boolean,
      require: false,
      default: false
    },

  },
  data: () => {
    return {
      checked: false
    }
  },

  methods: {
    onChange() {
      this.checked = !this.checked
      this.$emit("change", this.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-button-checkbox {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;

  &__checkbox {
    display: none;
  }

  &__line {
    background: #fff;
    border-radius: 10px;
    height: 7px;
    margin: 7px 0;
    transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
      width: 50%;
    }

    &:nth-of-type(2) {
      width: 100%;
    }

    &:nth-of-type(3) {
      width: 75%;
    }
  }

}

.checked {
  .mobile-button-checkbox {
    &__line {
      &:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(8px, 0px)
      }

      &:nth-of-type(2) {
        transform-origin: top;
        transform: rotatez(-45deg)
      }

      &:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(30px, -11px) rotatez(45deg);
      }
    }
  }
}

</style>
