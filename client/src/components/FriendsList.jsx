import React from 'react'
import Friend from "./Friend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state/index.js";


const FriendsList = ({ userId }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const getFriends = async () => {
        const response = await fetch(
          `http://localhost:3001/users/${userId}/friends`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
      };
    
      useEffect(() => {
        getFriends();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
  return (
      <div className="bg-white my-7 dark:bg-gray-800 p-2 rounded-xl">
      <p className='dark:text-white font-bold'>Friends List</p>
      <div className="flex flex-col mb-2">
          {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
          </div>
    </div>
  )
}

export default FriendsList