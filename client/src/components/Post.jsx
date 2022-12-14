import React, { useState } from "react";
import {
  FaHeart,
  FaRegBookmark,
  FaRegCommentDots,
  FaRegHeart,
  FaRegPaperPlane,
} from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setFriends } from "../state";
import Friend from "./Friend";


const Post = ({ postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,}) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;


  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  

  return (
    <div className="border-solid border-2 border border-blue-600 max-w-md mx-auto my-8 bg-white shadow-lg rounded-md overflow-hidden md:max-w-md ">
      <div className="md:flex">
        <div className="w-full">
        <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
          <div>
            <img
              src={`http://localhost:3001/assets/${picturePath}`}
              className="w-full h-75"
            />
          </div>

          <div className="p-4 flex justify-between items-center">
            <div className="flex flex-row items-center">
             {isLiked ? <FaHeart className="mr-2 text-xl text-red-600"onClick={patchLike}/>: <FaRegHeart className="mr-2 text-xl hover:text-gray-600" onClick={patchLike}/>}
              <FaRegCommentDots
                className="mr-2 text-xl hover:text-gray-600"
                onClick={() => setShowCommentBox(!showCommentBox)}
              />
            </div>
            <div>
              <FaRegBookmark className="mr-2 text-xl hover:text-gray-600" />
            </div>
          </div>
          <div className="text-gray-800 text-sm mx-3 px-2">
           {description}
          </div>
          <div className="flex w-full border-t border-gray-100">
            <div className="mt-3 mx-5 flex flex-row text-xs">
              <div className="flex text-gray-800 font-normal rounded-md mb-2 mr-4 items-center">
                Comments:<div className="ml-1 text-gray-800 text-ms">{ comments.length}</div>
              </div>
              <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                Likes: <div className="ml-1 text-gray-800 text-ms">{ likeCount}</div>
              </div>
            </div>
            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
              <div className="flex text-gray-800  rounded-md mb-2 mr-4 items-center">
                Posted:{" "}
                <div className="ml-1 text-gray-800  text-ms"> 2 days ago</div>
              </div>
            </div>
          </div>

          {showCommentBox && (
            <>
          <div className="text-black p-4 antialiased flex">
            <img
              className="rounded-full h-8 w-8 mr-2 mt-1 "
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt="pic"
            />
            <div>
              <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5 border border-slate-400">
                <div className="font-semibold text-sm leading-relaxed">
                  Sara Lauren
                </div>
                <div className="text-xs leading-snug md:leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className="text-xs text-gray-800 border border-slate-400 w-fit rounded-full px-2 -mt-1 bg-gray-100">
                14 w
              </div>
            </div>
          </div>
          <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <img
              className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
              alt="User avatar"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <FaRegPaperPlane className="text-blue-600" />
              </button>
            </span>
            <input
              type="text"
              className="w-full py-2 pl-4 pr-10 border border-gray-800 rounded-2xl	text-sm text-black bg-gray-100 border border-slate-400 appearance-none rounded-tg placeholder-gray-400 focus:outline-none"
              placeholder="Post a comment..."
              autocomplete="off"
              onF
            />
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
