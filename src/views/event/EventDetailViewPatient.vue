<template>
  <p id="info">
    Name: {{ event.name }} <br />
    Age: {{ event.age }} <br />
    Address: {{ event.location }}
  </p>
  <!-- <h1>{{ GStore.event }}</h1> -->
  <!-- <span v-for="comment in event.comment" :key="comment">
    {{ comment }} -->
  <!-- </span> -->
  <div class="imggg">
    <img class="add-img" :src="event.addimg" alt="" />

    <img class="add-img" :src="event.imageUrls" alt="" />
  </div>
  <div class="stats">
    <!-- <router-link
            class="event-link"
            :to="{ name: 'ChangeRoleToDoctor', params: { id: GStore.user.id } }"
          > -->
    <button
      v-if="isAdmin"
      class="btn hvr-underline-from-center"
      @click="change"
    >
      Set to doctor
    </button>
    <!-- </router-link>
          <router-link
            class="event-link"
            :to="{ name: 'ChangeRoleToPeople', params: { id: GStore.user.id } }"
          > -->
    <button
      v-if="isAdmin"
      class="btn hvr-underline-from-center"
      @click="change"
    >
      Set to people
    </button>
    <!-- </router-link> -->
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  props: ["id", "event"],
  computed: {
    isAdmin() {
      return AuthService.hasRoles("ROLE_ADMIN");
    },
    isDoctor() {
      return AuthService.hasRoles("ROLE_DOCTOR");
    },
  },
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
