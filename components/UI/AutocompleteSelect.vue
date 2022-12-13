<template>
  <div class='autocomplete-select' ref="auto-select">
    <div class='autocomplete-select__input-wrapper'>
      <input
        :placeholder="placeholder || 'select'"
        @input="onInput"
        v-model="inputValue"
        :disabled="disabled"
        class='autocomplete-select__input'
        type='text'
      >
      <div class='autocomplete-select__buttons-wrapper'>
        <button v-if="inputValue" @click="cancelValue" class='button autocomplete-select__cancel'/>
        <button v-if="inputValue" @click.prevent="openList" class='button autocomplete-select__open'/>
      </div>
      <ul
        v-if="list && showList"
        class='autocomplete-select__list'>
        <li
          v-for='item of list'
          :key='item.id'
          @click="selectItem(item)"
          class='autocomplete-select__list-item'
        >
          {{ item.option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AutocompleteSelect',
  props: {
    list: {
      type: Array,
      require: true,
    },
    placeholder: {
      type: String,
      require: false
    }
  },
  data: () => {
    return {
      showList: false,
      disabled: false,
      inputValue: ""
    };
  },

  watch: {
    list(value) {
      this.showList = !!value
    }
  },
  methods: {
    selectItem(item) {
      this.inputValue = item.option
      this.disabled = true
      this.showList = false
      this.$emit("selectItem", item)
    },
    cancelValue() {
      this.inputValue = ""
      this.disabled = false
    },
    openList() {
      this.showList = !this.showList
    },
    onInput({target: {value}}) {
      this.$emit("input", value)
    }
  },
  mounted() {
    const container = this.$refs["auto-select"]
    if (container) {
      window.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
          this.showList = false
        }
      })
    }
  },
};
</script>

<style lang='scss' scoped>
.autocomplete-select {
  color: #60666d;
  // global styles
  .button {
    background: none;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  .selected {
    //border: 2px solid #60666d;
  }

  // /global styles
  &__input-wrapper {
    position: relative;
    display: flex;
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

    &:disabled {
      background: none;
    }
  }

  &__buttons-wrapper {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 5px;
  }

  &__cancel {
    position: relative;
    margin: 0 auto;

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("assets/icons/close.png");
      background-size: cover;
    }
  }

  &__open {
    position: relative;

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("assets/icons/arrow-down.png");
      background-size: cover;
    }
  }

  &__list {

    position: absolute;
    z-index: 100;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    max-height: 200px;
    overflow: auto;
    box-shadow: 0 0 15px #afadad;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: linear-gradient(to bottom, #f2faff 0%, #f1f3f6 100%);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #60666d;
    }
  }

  &__list-item {
    cursor: pointer;
    padding: 15px 10px;
    background: #ffffff;

    &:hover {
      background: #f1f3f6;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
