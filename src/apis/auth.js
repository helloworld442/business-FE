import api from "./instance";

export const loginUser = async (req) => {
  const response = await api.post("/users/signin", req);

  return response.data;
};

export const registerUser = async (req) => {
  const response = await api.post("/users/signup", req);

  return response.data;
};
