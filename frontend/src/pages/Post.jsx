import React, { useEffect, useState } from "react";
import { getOnePost, postComment } from "../api/postRequests";
import SinglePost from "../components/SinglePost";
import { useLocation } from "react-router-dom";
import SingleComment from "../components/SingleComment";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState()
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [data, setData] = useState()

    useEffect(() => {
        getOnePost(path).then(res => {setData(res.data)})
    }, [])

    console.log("Ssss" ,data);
    const handleComment = async (e) => {
      e.preventDefault()
      const response = await postComment({
        "postId": path,
        "comment": comment
      })

      if (!response.success) {
        alert(response.message);
      } else navigate("/");
    }

  return (
    <div className="w-full flex items-center p-8 flex-col ">
      {data && <div className="border-2 border-black rounded-md w-1/3 flex flex-col items-center px-4">
        <div className="py-5 border-b-2 w-full flex justify-center">
          <span className="text-xl">{ data?.title }</span>
        </div>
        <SinglePost data={data} />


        <div className="w-full">
            {data?.comments.map((data) => (
              <SingleComment data={data} />
            ))}
        </div>

        <textarea rows={4} className="w-full bg-red-100 my-4 rounded-md p-4" placeholder="add your comment" onChange={e => setComment(e.target.value)}/>

        <button disabled={!comment} className="w-full h-7 bg-blue-400 my-6" onClick={handleComment}>Comment</button>
      </div>}
    </div>
  );
};

export default Post;
