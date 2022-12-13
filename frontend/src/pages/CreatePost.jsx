import React, { useState } from "react";
import { createPost } from "../api/postRequests";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  console.log(title, description, color);
  const titleColors = ["red", "yellow", "blue"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPost({
      title: title,
      description: description,
    });
    if (!response.success) {
      alert(response.message);
    } else navigate("/");
  };
  return (
    <div className="w-full flex items-center p-8 flex-col">
      <div className="border-2 border-black rounded-md w-1/4 flex flex-col items-center">
        <div className="py-5 border-b-2 w-full flex justify-center">
          <span className="text-xl">Create Post</span>
        </div>

        <div className=" w-full px-4">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              placeholder="Title"
              value={title}
              className="my-3 border-2 rounded-md p-2"
              onChange={(e) => setTile(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              rows="4"
              className="border-2 rounded-md p-2.5"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="my-3  flex justify-between">
              <span>Title Color</span>
              <div className="flex items-center justify-center">
                {titleColors.map((bgcolor) => (
                  <div
                    onClick={() => setColor(bgcolor)}
                    className="w-5 h-5 mx-2 rounded-sm"
                    style={{ backgroundColor: `${bgcolor}` }}
                  ></div>
                ))}
              </div>
            </div>

            <button className="w-full h-8 bg-blue-500 rounded-md text-white my-3">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
