import api from "./axios";

export const getStreak = async () => {
  const response = await api.get("/streak");
  return response.data;
};

export const updateStreak = async () => {
  const response = await api.post("/streak/update");
  return response.data;
};