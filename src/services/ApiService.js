import axios from "axios";

const ApiService = axios.create({
  baseURL: "https://localhost:7168/api",
});

ApiService.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default ApiService;
