<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventLayoutView', params: { id: event.id } }"
  >
    <div class="event-card">
      <!-- <span>@{{ event.time }} on {{ event.date }}</span> -->
      <h4 class="p-name">{{ event.name }}</h4>
      <!-- <h4 class="p-name2">Patient ID:{{ event.id }}</h4> -->
      <!-- <img class="add-imgg" :src="event.addimg" alt="" /> -->
      <img
        class="add-imgg"
        src="https://cdn.discordapp.com/attachments/859092780805914644/1035211810783100998/unknown.png"
        alt=""
      />
      <!-- <span>by</span>
      <h5>{{ event.organizer.name }}</h5> -->
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
.p-name2 {
  font-size: 50px;
}
.p-name {
  margin-top: 30px;
  font-size: 40px;
  font-family: Comic Sans MS;
}
.add-imgg {
  width: 250px;
  border-radius: 50px;
  margin: 20px;
}
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
  transform: scale(1.2);
  box-shadow: 0 3px 120px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
.img {
  width: 250px;
  padding: 30px;
  border-radius: 50%;
  margin-top: 30px;
}
</style>
