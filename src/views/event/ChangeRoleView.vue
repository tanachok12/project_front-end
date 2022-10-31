<template>
  <div class="card card-container">
    <h1>Add Vaccine to patients</h1>
    <h1>Patient ID: {{ GStore.organizers }}</h1>
    <form @submit.prevent="saveEvent">
      <h3>Vaccine</h3>
      <BaseInput v-model="event.id" type="text" label="id" class="field" />
      <!-- <BaseInput
        v-model="event.vaccine1"
        type="text"
        label="Vaccine"
        class="field"
      />
      <BaseInput
        v-model="event.vaccine2"
        type="text"
        label="Vaccine1"
        class="field"
      /> -->
      <BaseInput
        v-model="event.vaccine3"
        type="text"
        label="Vaccine3"
        class="field"
      />
      <!-- <h3>The image of the Event</h3>
      <UploadImages @changed="handleImages" />
      <h3>Name & describe patients</h3>

      <BaseInput v-model="event.name" type="text" label="Name" />
      <BaseInput v-model="event.age" type="text" label="Age" /> -->
      <!-- <BaseInput v-model="event.description" type="text" label="Description" /> -->

      <!-- <h3>Location of patients</h3> -->

      <!-- <label>Location</label> -->

      <!-- <BaseInput v-model="event.location" type="text" label="Location" /> -->

      <h3>Docter</h3>

      <BaseSelect
        :options="GStore.organizers"
        v-model="event.organizer.id"
        label="Select an Docter"
      />

      <button type="submit">Submit</button>
    </form>

    <!-- <pre>{{ event }}</pre> -->
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
// import UploadImages from "vue-upload-drop-images";
export default {
  inject: ["GStore"],
  components: {
    // UploadImages,
  },
  data() {
    return {
      event: {
        vaccine: "",
        vaccine1: "",
        vaccine3: "",
        imageUrls: [],
        name: "",
        description: "",
        location: "",
        organizer: { id: "", name: "" },
      },
      files: [],
    };
  },
  methods: {
    saveEvent() {
      Promise.all(
        this.files.map((file) => {
          return EventService.uploadFile(file);
        })
      ).then((response) => {
        this.event.imageUrls = response.map((r) => r.data);
        EventService.saveEvent(this.event)
          .then((response) => {
            console.log(response);
            this.$router.push({
              name: "EventDetails",
              params: { id: response.data.id },
            });
            this.GStore.flashMessage =
              "You are successfully add a new event for " + response.data.name;
            setTimeout(() => {
              this.GStore.flashMessage = "";
            }, 3000);
          })
          .catch(() => {
            this.$router.push("/");
          });
      });
    },
    handleImages(files) {
      this.files = files;
    },
  },
};
</script>
<style scoped>
.card-container.card {
  max-width: 950px !important;
  padding: 40px 40px;
  font-family: Comic Sans MS;
}
.card {
  background-color: #ebf0ec;
  padding: 50px 60px 50px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 25px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>
