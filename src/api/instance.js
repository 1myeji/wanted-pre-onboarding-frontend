import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

export const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: { "Content-Type": "application/json" },
});

export const authInstance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
