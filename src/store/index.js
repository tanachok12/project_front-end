import { reactive } from "vue";
export default reactive({
  flashMessage: "",
  comments: [],
  event: null,
  organizers: null,
  currentUser: JSON.parse(localStorage.getItem("user")),
});
