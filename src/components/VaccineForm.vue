<template>
  <form class="comment-form" @submit.prevent="onSubmit">
    <!-- <label for="vaccine">Vaccine:</label>
    <input id="vaccine" v-model="vaccine" />

    <label for="vaccine2">Vaccine2:</label>
    <input id="vaccine2" v-model="vaccine2" /> -->

    <label for="vaccine3">Vaccine3:</label>
    <textarea id="vaccine3" v-model="vaccine3"></textarea>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  inject: ["GStore"],
  data() {
    return {
      vaccine3: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.vaccine3 === "") {
        alert("Vaccine incomplete. Please fill out every field.");
        return;
      }
      this.GStore.flashMessage = "The vaccine is being added ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3500);
      let vaccine = {
        vaccine3: this.vaccine3,
      };
      this.$emit("comment-submited", vaccine);

      this.vaccine3 = "";
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}
label {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
}
.comment-form {
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 20px;
  margin: auto;
  margin-top: 40px;
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  background: #eff9fe;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
.comment-form .button {
  display: block;
  margin: auto;
  margin-top: 25px;
  background: #b5c7df;
  border: 2px solid #d8d8d8;
  border-radius: 5px;
}
textarea {
  width: 100%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 600px) {
  .comment-form {
    width: 90%;
  }
}
</style>
