import {
  createPostRepo,
  getAllPostRepo,
  getByIdRepo,
} from "../repositaries/postRepo";
import { makeResponse } from "../utilities/response";

export const createPostService = async (body) => {
  const { title, description } = body;
  try {
    if (!title || !description)
      return {
        status: 400,
        message: "Post title and the description required",
      };
    const response = createPostRepo(body);
    return response;
  } catch (error) {}
};

export const getAllPostsService = async () => {
  try {
    const response = await getAllPostRepo();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    return await getByIdRepo(id);
  } catch (error) {
    console.log(error);
  }
};
