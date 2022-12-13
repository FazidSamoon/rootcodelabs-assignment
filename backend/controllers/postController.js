import {
  createPostService,
  getAllPostsService,
  getById,
} from "../services/postServices";
import { makeResponse } from "../utilities/response";

export const createPost = async (req, res) => {
  console.log(req.body);
  try {
    const response = await createPostService(req.body);
    if (!response) return makeResponse({ res, status: 500, message: "Post creation unsuccesful!!" });
    if (response.status) return makeResponse({ res, ...response });
    makeResponse({ res, status: 200, data: response, message: "Successfully created the post..." });
  } catch (error) {
    makeResponse({ res, status: 400, data: error.message, message: error.message });
  }
};

export const gerAllPosts = async (req, res) => {
  try {
    const response = await getAllPostsService();
    if (!response) return makeResponse({ res, status: 500, message: "unable to retrieve posts!!" });
    makeResponse({ res, status: 200, data: response, message: "Successfully retrieved the posts..." });
  } catch (error) {
    makeResponse({ res, status: 400, data: error.message, message: error.message });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getById(id);
    if (!response) return makeResponse({ res, status: 500, message: "unable to retrieve post!!" });
    makeResponse({ res, status: 200, data: response, message: "Successfully retrieved the post..." });
  } catch (error) {
    makeResponse({ res, status: 400, data: error.message, message: error.message });
  }
};
