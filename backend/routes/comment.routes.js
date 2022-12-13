import Express from "express";
import { addComment } from "../controllers/commentController";

const CommentRouter = Express.Router()

CommentRouter.patch("/" , addComment)

export default CommentRouter