import axios from "axios";

const api = axios.create({
  baseURL: "https://abc4-188-162-48-72.eu.ngrok.io/",
  withCredentials: true,
  headers: {
    accept: "application/json",
  },
});

export { api };
