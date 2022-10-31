import { reactive } from "vue";
export default reactive({
  flashMessage: "",
  comment: [],
  event: null,
  organizers: null,
  vaccine: [],
  currentUser: JSON.parse(localStorage.getItem("user")),
});
