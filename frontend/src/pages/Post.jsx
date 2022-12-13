import React, { useEffect, useState } from "react";
import { getOnePost } from "../api/postRequests";
import SinglePost from "../components/SinglePost";
import { useLocation } from "react-router-dom";

const Post = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [data, setData] = useState()
    useEffect(() => {
        getOnePost(path).then(res => setData(res.data))
    }, [])

    console.log(data);
  return (
    <div className="w-full flex items-center p-8 flex-col">
      <div className="border-2 border-black rounded-md w-1/3 flex flex-col items-center">
        <div className="py-5 border-b-2 w-full flex justify-center">
          <span className="text-xl">{data?.title}</span>
        </div>
        <SinglePost data={data} />
      </div>
    </div>
  );
};

export default Post;
