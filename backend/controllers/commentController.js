import { addCommentService } from "../services/commentService";
import { makeResponse } from "../utilities/response"

export const addComment = async(req, res) => {
    try {
        const response = await addCommentService(req.body)
        if (!response) return makeResponse({ res, status: 500, message: "Post creation unsuccesful!!" });
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: "Successfully created the post..." });
    } catch (error) {
        console.log(error);
        makeResponse({
            res,
            status: 400,
            data: error.message,
            message: error.message,
          });
    }
}