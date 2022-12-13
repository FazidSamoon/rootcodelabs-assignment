import React from "react";

const SingleComment = ({ data }) => {
  return (
    <div className="w-full bg-red-200 flex flex-col border-2 border-black rounded-md mt-2">
      <h1>{data}</h1>
    </div>
  );
};

export default SingleComment;
