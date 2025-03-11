import React, { useState } from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);

  return (
    <div className="flex justify-center items-center h-screen ">

        <div className="bg-white shadow-lg rounded-lg p-4 w-80 flex flex-col gap-3">
        <div className="flex  items-center gap-3">
            <img
            src={post.profileImage}
            alt={post.username}
            className="w-10 h-10 rounded-full"
            />
            <h2 className="text-lg font-semibold">{post.username}</h2>
        </div>
        <p className="text-gray-700 mt-3">{post.content}</p>
        <div className="mt-3">
            <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
        </div>
        </div>
    </div>
  );
};

export default PostCard;