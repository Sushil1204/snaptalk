import React from "react";
import { FaMapMarkerAlt, FaRegBookmark, FaStar } from "react-icons/fa";
// import { FiBookmark } from "react-icons/fi";

const Advert = () => {
  return (
    <div className="p-2 bg-white dark:bg-gray-800 dark:text-white border border-blue-600 rounded-xl">
      <p className="text-md font-bold mg-2">Sponsored</p>
      <div
        className="relative flex flex-col justify-between bg-white shadow-md  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded-md shadow-md h-64 mb-2"
        style={{
          "backgroundImage":
            "url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80')",
        }}
      >
        <div className="absolute bg-gradient-to-t from-green-400 to-blue-400  opacity-50 inset-0 z-0"></div>

        <div className="relative flex flex-row items-end  h-72 w-full ">
          <div className="absolute right-0 top-0 m-2">
            <FaRegBookmark className="text-xl text-white"/>
          </div>
          <div className="p-6 rounded-lg  flex flex-col w-full z-10 ">
            <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">
              Loremipsum..
            </h4>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col">
                <h2 className="text-sm flex items-center text-gray-300 font-normal">
                  <FaMapMarkerAlt className="text-xl mr-2" />
                  Dubai
                </h2>
              </div>
            </div>
            <div className="flex pt-4  text-sm text-gray-300">
              <div className="flex items-center mr-auto">
                <FaStar className="text-xl text-yellow-600 mr-2" />
                <p className="font-normal">4.5</p>
              </div>
              <div className="flex items-center font-medium text-white ">
                $1800
                <span className="text-gray-300 text-sm font-normal"> /wk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
