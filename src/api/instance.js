import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: { "Content-Type": "application/json" },
});

export const authInstance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
