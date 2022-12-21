<template>
  <div v-if="comments" class="comments">
    <Comment v-for="(comment, index) of comments"
             :key="comment.id"
             :comment="comment"
             v-if="index === shownCommentIndex"
    />
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
      intervalId: 0
    }
  },
  computed: {
    numberOfComments() {
      return this.comments ? this.comments?.length : 0
    }
  },
  methods: {
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
.comments {
  height: 400px;
  background: url('assets/icons/bg-review.jpg')
}
</style>
