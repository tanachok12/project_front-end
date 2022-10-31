<template>
  <div v-if="GStore.event">
    <h1 class="name">{{ GStore.event.name }}</h1>
    <!-- <img :src="event.addimg" alt="" /> -->
    <div class="nav">
      <router-link class="list" :to="{ name: 'EventDetailsPatient' }"
        >Patient Details</router-link
      >

      <router-link v-if="isDoctor" class="list" :to="{ name: 'DoctorComment' }"
        >Doctor Recommendation</router-link
      >
      <router-link class="list" :to="{ name: 'EventEdit' }"
        >CommentList
      </router-link>
      <router-link class="list" :to="{ name: 'VaccineEdit' }"
        >Vaccine Certificate</router-link
      >
      <router-link v-if="isAdmin" class="list" :to="{ name: 'addVaccine' }"
        >Add Vaccine
      </router-link>
      <!-- <router-link class="list" :to="{ name: 'EventEdit' }"
        >CommentList
      </router-link> -->
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
import AuthService from "@/services/AuthService.js";
export default {
  inject: ["GStore"],
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
.name {
  font-family: Comic Sans MS;

  border: 1px solid #a9b635;
  padding: 10px;
  margin-left: 580px;
  background: rgb(252, 249, 249);
  width: 500px;
  border-radius: 10px;
}
.nav {
  margin: 1rem;
  padding: 1rem;
  background-color: none;
  width: 100%;
  margin-left: 400px;
}
.nav a {
  text-decoration: none;
  cursor: pointer;
}
.list {
  padding: 10px;
  background-color: none;
  border-radius: 25px;
  background-color: #9fe2bf;
  color: black;
  width: 200px;
  margin: 8px;
}
.list:hover {
  background-color: #40e0d0;
  transition: 0.5s;
  color: #fff;
}
.img {
  margin-top: 20px;
}
.imggg {
  border-radius: 50%;
  width: 250px;
}
</style>
