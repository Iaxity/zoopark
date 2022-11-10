import { api } from "@/api/axios.js";

async function auth(email, password) {
  const response = await api.post("user/auth", { email, password });
  return response;
}

async function createUser(name, email, phone, password) {
  const response = await api.post("user/create", {
    name,
    email,
    phone,
    password,
  });
  return response.data;
}
export { auth, createUser };
