import axios from "axios";

const api = axios.create({
  baseURL: "https://a0db-31-180-163-127.eu.ngrok.io/",
});

api.interceptors.request.use((config) => {
  config.headers["ngrok-skip-browser-warning"] = true;
  return config;
});
export { api };
