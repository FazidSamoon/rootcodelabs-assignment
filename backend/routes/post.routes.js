import Express from "express";
import { createPost, gerAllPosts, getPostById } from "../controllers/postController";

const postRouter = Express.Router()

postRouter.get("/", gerAllPosts)
postRouter.get("/:id", getPostById)
postRouter.post("/", createPost)

export default postRouter