import Express from "express";
import CommentRouter from "./comment.routes";
import postRouter from "./post.routes";

const router = Express.Router();

router.use("/posts", postRouter);
router.use("/comments", CommentRouter);

export default router;
