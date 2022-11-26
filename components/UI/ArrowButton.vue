<template>
  <button class='button-arrow' @click='onClick'>
    <!--right-->
    <svg v-if='buttonType' :width='widthDefault' :height='heightDefault' viewBox='0 0 10 16'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
      <path
        class='button-arrow__path'
        d='M-4.76837e-06 13.6493L5.63692 8.00009L-4.76837e-06 2.35086L1.73538 0.615479L9.12 8.00009L1.73538 15.3847L-4.76837e-06 13.6493Z'
        fill='#20212E'/>
    </svg>
    <!--/right-->
    <!--left-->
    <svg v-else :width='widthDefault' :height='heightDefault' viewBox='0 0 10 16' fill='none'
         xmlns='http://www.w3.org/2000/svg'>
      <path
        class='button-arrow__path'
        d='M9.9231 13.6493L4.28618 8.00009L9.9231 2.35086L8.18772 0.615479L0.803101 8.00009L8.18772 15.3847L9.9231 13.6493Z'
        fill='#20212E'/>
    </svg>
    <!--/left-->
  </button>
</template>

<script>
export default {
  name: 'ArrowButton',
  props: {
    type: {
      type: String,
      require: false
    },
    width: {
      type: String,
      require: false
    },
    height: {
      type: String,
      require: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  },
  data: () => {
    return {
      arrowSideDefault: 'right',
      widthDefault: '20px',
      heightDefault: '20px'
    }
  },
  computed: {
    buttonType() {
      return this.arrowSideDefault?.toLowerCase() === this.type?.toLowerCase()
    }
  }
}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.button-arrow {
  background: none;
  border: none;
  cursor: pointer;
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;

  &:hover {
    .button-arrow__path {
      fill: $fontColorMain;
    }
  }

  &__path {
    transition: .3s;
    fill: #474747;
  }
}
</style>
