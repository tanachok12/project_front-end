<template>
  <div class="comment-container">
    <h4>View Comment</h4>
    <!-- {{ GStore.event }} -->
    <div id="comment" v-for="comment in commentsHistory" :key="comment.id">
      <p>-----------------------------------</p>
      <p>Doctor: {{ comment.name }}</p>
      <p>Comment: {{ comment.comment }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["commentsHistory"],
  inject: ["GStore"],
};
</script>

<style scoped>
.comment-container {
  width: 425px;
  padding: 20px;
  font-size: 18px;
  text-align: left;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  background: #eff9fe;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  border: 2px solid #d8d8d8;
}
</style>
