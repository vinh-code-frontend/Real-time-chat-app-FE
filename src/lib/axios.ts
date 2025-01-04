import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://real-time-chat-app-be.onrender.com/api",
  withCredentials: true,
})
