import { apiRequest, axiosInstance } from "./axios"

export const getAllPosts = async () => {
    const response = await apiRequest(() => axiosInstance.get("posts"));
    return response
}

export const createPost = async (data) => {
    const response = await apiRequest(() => axiosInstance.post("posts", data));
    return response
}

export const getOnePost = async(id) => {
    const response = await apiRequest(() => axiosInstance.get("posts/" + id));
    return response
}