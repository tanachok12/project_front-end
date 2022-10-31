<template>
  <div class="row">
    <!-- <div class="col">
      <CommentForm @comment-submited="addComment" />
    </div> -->
    <div class="col">
      <VaccineForm @comment-submited="addVaccine" />
    </div>
  </div>
</template>
<script>
// import CommentForm from "@/components/CommentForm.vue";
import VaccineForm from "@/components/VaccineForm.vue";
import AuthService from "@/services/AuthService";
import VaccineService from "@/services/VaccineService.js";
import GStore from "@/store";
// import CommentService from "@/services/CommentService.js";
export default {
  inject: ["GStore"],
  components: {
    // CommentForm,
    VaccineForm,
  },
  data() {
    return {
      // newComment: null,
      newvaccine: null,
    };
  },
  methods: {
    addVaccine(vaccine) {
      console.log(vaccine);
      // GStore.event.push(vaccine);
      // GStore.patient.doctorRec = GStore.comments.filter(
      //   (patient) => GStore.patient.id == patient.patient_id
      // )
      VaccineService.addVaccine(GStore.event.id, vaccine);
    },
  },
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
