<template>
<span class='text'>
  <slot />
  {{ text }}
</span>
</template>

<script>
export default {
  name: 'Description',
  props: {
    text: {
      type: [String, Number],
      require: false
    }
  }
}
</script>

<style lang='scss' scoped>

.text {
  font-size: clamp(1rem, 2vw, 1.3rem);
}
</style>
