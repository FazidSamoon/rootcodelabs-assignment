import { apiRequest, axiosInstance } from "./axios";

export const getAllPosts = async () => {
  const response = await apiRequest(() => axiosInstance.get("posts"));
  return response;
};

export const createPost = async (data) => {
  const response = await apiRequest(() => axiosInstance.post("posts", data));
  return response;
};

export const getOnePost = async (id) => {
    try {
        return await apiRequest(() => axiosInstance.get("posts/" + id)  )
    } catch (error) {
        console.log(error);
    }
};


export const postComment = async (body) => {
    return await apiRequest(() => axiosInstance.patch("comments/", body)  )
}
