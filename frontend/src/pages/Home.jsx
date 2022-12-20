import React, { useEffect, useState } from "react";
import SinglePost from "../components/SinglePost";
import { Link } from "react-router-dom";
import { getAllPosts } from "../api/postRequests";
import {  useDispatch, useSelector } from "react-redux"
import { loadAllPosts, selectAllPosts, fetchAllPosts, getPostStatus, getPostsError } from "../redux/postSlice";

const Home = () => {
  const data = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch()
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchAllPosts());}
  }, [postStatus]);

  if (error) {
    alert("somrthing went wrong")
  }
  return (
    <div className="w-full flex items-center p-8 flex-col">
      <Link
        to={"createPost"}
        className="w-1/4 px-4 py-2 bg-blue-500 text-white flex items-center justify-center"
      >
        <div>Create New Post</div>
      </Link>

      <div className="w-1/3  mt-8">
        {data && data?.map((item) => (
          <Link to={`/post/${item._id}`}>
            <SinglePost data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
