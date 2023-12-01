import api from "./instance";

export const getPost = async (req) => {
  const response = await api.get(`/posts/${req}`);

  return response.data;
};

export const getPosts = async () => {
  const response = await api.get("/posts");

  return response.data;
};

export const createPost = async (req) => {
  const response = await api.post("/posts", req);

  return response.data;
};

export const updatePost = async (params, req) => {
  const response = await api.put(`/posts/${params}`, req);

  return response.data;
};

export const deletePost = async (req) => {
  const response = await api.delete(`/posts/${req}`);

  return response.data;
};
