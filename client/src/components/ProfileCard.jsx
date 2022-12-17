import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
const ProfileCard = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <>
      <div className="card w-62 mx-auto pt-6 rounded-md shadow-xl hover:shadow border border-blue-500">
        <img
          className="w-[120px] h-[120px] mx-auto rounded-full border-8 border-white ring-2 ring-blue-500"
          src={`http://localhost:3001/assets/${picturePath}`}
          alt="profile"
        />
        <div className="text-center mt-2 text-3xl font-medium">{firstName}{" "}{lastName}</div>
        <div className="my-2 font-bold flex items-center align-center"><span className="text-xl"><MdWork className="text-blue-500 mx-5"/></span>{ occupation }</div>
        <div className="my-2 font-bold flex items-center align-center"><span className="text-xl"><HiOutlineMapPin className="text-blue-500 mx-5"/></span>{ location }</div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">{friends.length}</span> <br/> Followers
          </div>
          <div className="w-0 border border-gray-300" />
          <div className="w-1/2 text-center">
            <span className="font-bold">{viewedProfile}</span> Following
          </div>
          <div className="w-0 border border-gray-300" />
          <div className="w-1/2 text-center">
            <span className="font-bold">{impressions}</span> Uploads
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
