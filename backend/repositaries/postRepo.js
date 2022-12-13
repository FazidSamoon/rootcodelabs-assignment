import postModel from "../models/postModel";

export const createPostRepo = async (post) => {
  try {
    const response = await postModel.create(post);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPostRepo = async () => {
  try {
    return await postModel.find();
  } catch (error) {
    console.log(error);
  }
};

export const getByIdRepo = async (id) => {
  try {
    return await postModel.findById(id);
  } catch (error) {}
};
