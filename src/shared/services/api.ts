import axios from "axios";

export const api = axios.create({
  baseURL: "https://coffe-delivery.herokuapp.com/",
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});
