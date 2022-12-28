<template>
  <div v-if="comments" class="comments">
    <Comment
      v-for="(comment, index) of comments"
      :key="comment.id"
      :comment="comment"
      v-if="index === shownCommentIndex"
    />
    <ul class="comments-menu">
      <li
        class="comments-menu__item"
        v-for="(commentButton, index) of comments"
        @click="onCommentButton(index)"
        :class="{active:shownCommentIndex === index}"
        :key="commentButton.id"
      />
    </ul>
  </div>
  <Loading v-else/>
</template>

<script>
import Comment from "~/components/Comments/Comment";
import Loading from "~/components/UI/Loading";

export default {
  name: "Comments",
  components: {Loading, Comment},
  props: {
    comments: {
      type: Array,
      require: true
    }
  },
  data: () => {
    return {
      shownCommentIndex: 0,
      intervalId: 0,
    }
  },
  computed: {
    numberOfComments() {
      return this.comments ? this.comments?.length : 0
    }
  },
  methods: {
    onCommentButton(index) {
      this.shownCommentIndex = index
    },
    nextComment() {
      this.shownCommentIndex = this.shownCommentIndex < this.numberOfComments - 1 ? this.shownCommentIndex + 1 : 0
    }
  },
  created() {
    this.intervalId = setInterval(this.nextComment, 5000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.comments {
  height: 400px;
  background: url('assets/icons/bg-review.jpg');
  @media screen and (max-width: $mediaMWidth) {
    background-position: right;
  }

  .comments-menu {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 20%;

    &__item {
      height: 10px;
      width: 10px;
      border: 1px solid #333;
      border-radius: 50%;
      margin: 40px 5px;
      cursor: pointer;
    }
  }
}

.active {
  background: #333333;
}
</style>
