import api from "./axios";

export const getTrends = async () => {
  const response = await api.get("/trends");
  return response.data;
};

export const getTrendStats = async () => {
  const response = await api.get("/trends/stats");
  return response.data;
};