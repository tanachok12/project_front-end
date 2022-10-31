import apiClient from "@/services/AxiosClient.js";
export default {
  addVaccine(id, vaccine) {
    return apiClient.post("/vaccine/event/" + id, vaccine);
  },
};
