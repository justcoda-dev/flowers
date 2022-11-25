<template>
  <h1 class="title h1" v-if="type === 'h1'">
    <slot/>
    {{ text }}
  </h1>
  <h2 class="title h2" v-else-if="type === 'h2'">
    <slot/>
    {{ text }}
  </h2>
  <h3 class="title h3" v-else-if="type === 'h3'">
    <slot/>
    {{ text }}
  </h3>
  <h4 class="title h4" v-else-if="type === 'h4'">
    <slot/>
    {{ text }}
  </h4>
  <h5 class="title h5" v-else>
    <slot/>
    {{ text }}
  </h5>
</template>

<script>
export default {
  name: "Title",
  props: {
    type: {
      type: String,
      require: false
    },
    text: {
      type: [String, Number],
      require: false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/colors";
@import "src/assets/sizes";

.title {
  color: $white;
  padding: 0;
  margin: 0;
}

.h1 {
  display: inline;
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: 900;
}

.h2 {
  font-size: clamp(2.5rem, 10vw, 3.5rem);
  font-weight: 900;
}

.h3 {
  font-size: clamp(2rem, 10vw, 3rem);
  font-weight: 400;
}

.h4 {
  font-size: clamp(1.8rem, 10vw, 2.5rem);
  font-weight: 900;
}

.h5 {
  font-size: clamp(1.6rem, 10vw, 2.2rem);
  font-weight: 900;
}

</style>