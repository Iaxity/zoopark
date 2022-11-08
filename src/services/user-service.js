import { api } from "@/api/axios.js";

async function getUsers() {
  const response = await api.post("user/read", {});
  return response.data;
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
export { getUsers, createUser };
