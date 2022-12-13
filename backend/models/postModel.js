import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [String],
      default: [],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("Posts", postSchema);
export default postModel;
