import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state";
import { IoPersonAdd, IoPersonRemoveSharp } from "react-icons/io5";


const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
    const isFriend = friends.find((friend) => friend._id === friendId);

    
    const patchFriend = async () => {
      const response = await fetch(
        `http://localhost:3001/users/${_id}/${friendId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
        );
        const data = await response.json();
      dispatch(setFriends({ friends: data }));
      };
  return (
    <div className="flex justify-between items-center bg-white mb-2 p-2 rounded-xl">
            <div className="flex flex-row items-center cursor-pointer" onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}>
              <img
                src={`http://localhost:3001/assets/${userPicturePath}`}
                className="rounded-full h-[50px] w-[50px]"
              />

              <div className="flex flex-col ml-1">
                <span className="font-bold">{name}</span>
                  {subtitle}
              </div>
            </div>

            <div className="pr-2" >
              {!isFriend ?
                  (<IoPersonAdd className="mr-2 text-xl text-white hover:text-blue-900 bg-blue-600 rounded-full w-8 h-8 px-1 cursor-pointer" onClick={() => patchFriend()} />)
                  :
              (<IoPersonRemoveSharp className="mr-2 text-xl text-white hover:text-blue-900 bg-blue-600 rounded-full w-8 h-8 px-1 cursor-pointer" onClick={() => patchFriend()} />)
}
            </div>
          </div>

  )
}

export default Friend