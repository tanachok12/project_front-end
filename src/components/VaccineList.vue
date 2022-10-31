<template>
  <div class="comment-container">
    <h4>View Vaccine</h4>
    <p>Frist-Dose: {{ GStore.event.vaccine1 }}</p>
    <p>Second-Dose: {{ GStore.event.vaccine2 }}</p>
    <!-- {{ GStore.event.vaccine }} -->
    <!-- {{ GStore.event.vaccine1 }} -->
    <!-- <p>Frist-Dose: {{ event.vaccine1 }}</p>
    <p>Second-Dose: {{ event.vaccine2 }}</p> -->
    <!-- {{ GStore.event }} -->
    <div id="comment" v-for="vaccine in vaccineHistory" :key="vaccine.id">
      <!-- <p>Frist-Dose: {{ GStore.event.vaccine1 }}</p>
      <p>Second-Dose: {{ GStore.event.vaccine2 }}</p> -->
      <p>Thrid-Dose: {{ vaccine.vaccine3 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["vaccineHistory"],
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
