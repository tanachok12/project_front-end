<template>
  <div class="namee">
    <h4>First-dose : {{ event.vaccine1 }}</h4>
    <!-- <h4>Date : {{ event.durationTime1 }}</h4> -->
    <h4>Second-dose : {{ event.vaccine2 }}</h4>
    <!-- <h4>Third-dose : {{ vaccine.vaccine }}</h4> -->

    <!-- <h4>Date : {{ event.durationTime2 }}</h4> -->
  </div>
  <!-- <div class="card card-container">
    <h1>Create an patients</h1>
    <form @submit.prevent="saveEvent">
      <h3>Vaccine</h3>
      <BaseInput
        v-model="event.vaccine"
        type="text"
        label="Vaccine"
        class="field"
      />
      <BaseInput
        v-model="event.vaccine1"
        type="text"
        label="Vaccine1"
        class="field"
      />
      <BaseInput
        v-model="event.vaccine2"
        type="text"
        label="Vaccine2"
        class="field"
      />
      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div> -->
</template>

<script>
export default {
  props: ["id", "event"],
  inject: ["GStore"],
  methods: {
    register() {
      this.GStore.flashMessage = "The data has been updated" + this.event.title;
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "EventDetails",
        params: { id: this.event.id },
      });
    },
  },
};
</script>
<style>
.namee {
  margin: 0 auto;
  background-color: white;
  border-radius: 35px;
  width: 550px;
  font-family: Comic Sans MS;
}
</style>
