<template>
  <p id="info">
    Name: {{ event.name }} <br />
    Age: {{ event.age }} <br />
    Address: {{ event.location }}
  </p>
  <span v-for="comment in event.comment" :key="comment">
    {{ comment }}
  </span>
  <div class="imggg">
    <img class="add-img" :src="event.addimg" alt="" />

    <img class="add-img" :src="event.imageUrls" alt="" />
  </div>
</template>

<script>
export default {
  props: ["id", "event"],
};
</script>
<style>
#info {
  background-color: #fff;
  padding: 1rem;
  width: 550px;
  text-align: center;
  margin: 0 auto;
  border-radius: 25px;
  letter-spacing: 2px;
  font-family: Comic Sans MS;
}
.imggg {
  margin-left: 530px;
}
.add-img {
  width: 370px;
  margin-top: 30px;
  margin-left: 120px;
  border-radius: 25px;
}
</style>
