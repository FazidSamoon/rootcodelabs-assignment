import React from "react";

const SinglePost = (data) => {
  // console.log(data);
  return (
    <div className="w-full bg-red-200 flex flex-col border-2 border-black rounded-md mt-2">
      <div className="flex flex-col p-5">
        <span className="text-2xl">{data.data.title}</span>
        <div className="max-w-[10rem] text-left ">
        <span className="mt-4 max-w-[10rem]">
          {data.data.description}
        </span>
        </div>
        
      </div>

      <div className="mt-4 border-black w-full border-t-2 flex justify-end px-5 py-2">
            <span>{data.data.comments.length} comments</span>
      </div>
    </div>
  );
};

export default SinglePost;
