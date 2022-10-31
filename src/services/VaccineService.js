import apiClient from "@/services/AxiosClient.js";
// import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: process.env.VUE_APP_BACKEND_URL,
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

export default {
  getVaccine(id) {
    return apiClient.get("/vaccine/" + id);
  },
  saveVaccine(vaccine) {
    return apiClient.post("/vaccine", vaccine);
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
      "event?_limit=" + perPage + "&_page=" + page + "&title=" + keyword
    );
  },
  addComment(id, Comment) {
    return apiClient.post("/comment/" + id, Comment);
  },
  uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);
    return apiClient.post("/uploadFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
