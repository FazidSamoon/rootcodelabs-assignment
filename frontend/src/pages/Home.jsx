import React, { useEffect, useState } from "react";
import SinglePost from "../components/SinglePost";
import { Link } from "react-router-dom";
import { getAllPosts } from "../api/postRequests";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const res = getAllPosts().then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <div className="w-full flex items-center p-8 flex-col">
      <Link
        to={"createPost"}
        className="w-1/4 px-4 py-2 bg-blue-500 text-white flex items-center justify-center"
      >
        <div>Create New Post</div>
      </Link>

      <div className="w-1/3  mt-8">
        {data?.map((item) => (
          <Link to={`/post/${item._id}`}>
            <SinglePost data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
