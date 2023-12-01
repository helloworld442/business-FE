import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.data.errorCode === "A001") {
      alert("jwt 인증이 만료되었습니다.");
      window.location.href = "/user/signin";
    }

    if (error.response.data.errorCode === "P001") {
      alert("게시글을 존재하지 않습니다.");
    }

    if (error.response.data.errorCode === "P002") {
      alert("게시글을 주인이 아닙니다.");
    }

    return Promise.reject(error);
  }
);

export default instance;
