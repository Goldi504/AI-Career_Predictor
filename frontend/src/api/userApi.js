import api from "./axios";

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const getProfile =
  async () => {
    const response =
      await api.get(
        "/users/profile"
      );

    return response.data;
  };

export const updateProfile =
  async (data) => {
    const response =
      await api.put(
        "/users/profile",
        data
      );

    return response.data;
  };