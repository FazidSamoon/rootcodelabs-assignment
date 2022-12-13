import postModel from "../models/postModel";

export const addCommentRepo = async (body) => {
  try {
    const { postId, comment } = body;
    const response = await postModel.findByIdAndUpdate(
      { _id: postId },
      { $push: { comments: comment } },
      { new: true }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
