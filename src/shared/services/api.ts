import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const api = axios.create({
  baseURL: "https://coffe-delivery.herokuapp.com/",
});

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
