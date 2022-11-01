import axios from "axios";

const instance = axios.create({
  baseURL: "https://1c20-188-162-201-39.eu.ngrok.io",
  withCredentials: true,
  headers: {
    accept: "application/json",
  },
});

export default instance;
