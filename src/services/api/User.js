import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const userApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getUsers = async () => {
  try {
    const response = await userApi.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { getUsers };