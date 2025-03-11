import React from "react";

const LikeButton = ({ isLiked, setIsLiked }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold transition-all ${
        isLiked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
      onClick={() => setIsLiked(!isLiked)}
    >
      {isLiked ? "Liked ❤️" : "Like ♡"}
    </button>
  );
};

export default LikeButton;