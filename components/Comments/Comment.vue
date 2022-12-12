<template>
  <div class="comment" v-if="propIsCome">
    <img class="comment__image"
         :src="`https://api.kvitnychok.store${comment.attributes?.icon?.data?.attributes?.url}`"
         alt="loading...">
    <p class="comment__comment">{{ comment.attributes?.comment }}</p>
    <span class="comment__user">{{ this.comment.attributes?.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      require: true
    }
  },
  computed: {
    propIsCome(){
      return Object.keys(this.comment).length
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
  }

  &__comment {
    margin: 20px;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  &__user {
    font-weight: 500;
  }
}
</style>
