import { api } from "@/api/axios.js";

async function auth(email, password) {
  const response = await api.post("user/auth", { email, password });
  return response.data;
}

export { auth };
