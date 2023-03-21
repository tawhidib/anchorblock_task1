import axios, { CreateAxiosDefaults } from "axios";

const defaultOption: CreateAxiosDefaults = {
  baseURL: process.env.API_URL,
  headers: { "Content-Type": "application/json" },
};

const api = axios.create(defaultOption);

export default api;
