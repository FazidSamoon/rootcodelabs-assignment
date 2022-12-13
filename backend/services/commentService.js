import { addCommentRepo } from "../repositaries/commentRepo";

export const addCommentService = async (body) => {
  return await addCommentRepo(body);
};
