import React, { useState } from "react";
import SNAPBOOK from "../assets/SNAPBOOK.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { MdDarkMode, MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="px-4 py-5 md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Snapbook
          </span>
        </a>
        <ul className="border-blue-600 mx-auto px-3 rounded-xl focus-within:border-none focus-within:ring focus-within:ring-offset-2 flex h-10 items-center justify-start border-2 bg-gray-100 leading-4 ring-blue-600">
          <li>
            <input
              placeholder="Search"
              className="peer flex-grow bg-transparent text-gray-500 outline-none"
            />
          </li>
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <MdDarkMode className="text-2xl" />
          </li>
          <li>
            <AiOutlineMessage className="text-2xl" />
          </li>
          <li>
            <IoNotificationsOutline className="text-2xl" />
          </li>
          <li>
            <div
              className="flex items-center justify-between border-2 rounded border-blue-200 w-20 p-1 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <img
                className="h-9 w-9 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile"
              />
              <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                {!show ? (
                  <IoIosArrowDropdown className="text-blue-200 ml-3" />
                ) : (
                  <IoIosArrowDropup className="text-blue-200 ml-3" />
                )}
              </div>
            </div>
            {show && (
              <ul className="visible transition duration-300 opacity-100 bg-white shadow rounded mt-2 w-fit absolute">
                <li className="cursor-pointer text-gray-600 text-sm dark:hover:bg-blue-200 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal flex items-center">
                  <span>Logout</span>
                  <MdOutlineLogout className="text-xl ml-3" />
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Snapbook
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <MdDarkMode className="text-2xl" />
                    </li>
                    <li>
                      <AiOutlineMessage className="text-2xl" />
                    </li>
                    <li>
                      <IoNotificationsOutline className="text-2xl" />
                    </li>
                    <li>
                      <div
                        className="flex items-center justify-between border-2 rounded border-blue-200 w-20 p-1 cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        <img
                          className="h-9 w-9 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="profile"
                        />
                        <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                          {!show ? (
                            <IoIosArrowDropdown className="text-blue-200 ml-3" />
                          ) : (
                            <IoIosArrowDropup className="text-blue-200 ml-3" />
                          )}
                        </div>
                      </div>
                      {show && (
                        <ul className="visible transition duration-300 opacity-100 bg-white shadow rounded mt-2 w-fit absolute">
                          <li className="cursor-pointer text-gray-600 text-sm dark:hover:bg-blue-200 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal flex items-center">
                            <span>Logout</span>
                            <MdOutlineLogout className="text-xl ml-3" />
                          </li>
                        </ul>
                      )}
                    </li>
                    <ul className="border-blue-600 mx-auto px-3 rounded-xl focus-within:border-none focus-within:ring focus-within:ring-offset-2 flex h-10 items-center justify-start border-2 bg-gray-100 leading-4 ring-blue-600 sm:w-96">
                      <li>
                        <input
                          placeholder="Search"
                          value=""
                          className="peer flex-grow bg-transparent text-gray-500 outline-none"
                        />
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
