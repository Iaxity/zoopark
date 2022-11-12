import { api } from "@/api/axios.js";

async function getUserlist(start, end) {
  const response = await api.get("user/read", { start, end });
  return response.data.users.rows;
}

export { getUserlist };
