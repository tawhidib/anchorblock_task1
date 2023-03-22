import axios, { CreateAxiosDefaults } from "axios";

const defaultOption: CreateAxiosDefaults = {
  baseURL: process.env.API_URL || "https://reqres.in/api",
  headers: { "Content-Type": "application/json" },
};

const api = axios.create(defaultOption);

api.interceptors.request.use((config) => {
  let token;

  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  }

  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

console.log(defaultOption);

export default api;
