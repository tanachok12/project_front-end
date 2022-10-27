<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventLayoutView', params: { id: event.id } }"
  >
    <div class="event-card">
      <!-- <span>@{{ event.time }} on {{ event.date }}</span> -->
      <h4>{{ event.title }}</h4>
      <!-- <span>by</span>
      <h5>{{ event.organizer.name }}</h5> -->
      <img
        class="img"
        src="https://cdn.discordapp.com/attachments/923851454681337896/1035120894856658994/doctor.jpeg"
      />
    </div>
  </router-link>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 450px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  background-color: rgb(30, 217, 186);
  border-radius: 25px;
  margin: 20px;
  height: 400px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
.img {
  width: 200px;
}
</style>
