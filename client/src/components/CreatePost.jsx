import React, { useState } from "react";
import { HiPhoto, HiOutlineMapPin } from "react-icons/hi2";
import { FaRegPaperPlane } from "react-icons/fa";
import Dropzone from "react-dropzone";
import { MdOutlineEdit } from "react-icons/md";
const CreatePost = () => {
  const [showPhotoInput, setShowPhotoInput] = useState(false)
  return (
    <div>
      <form className="bg-white shadow rounded-lg mb-6 p-4 shadow-xl border border-slate-200">
        <textarea
          name="message"
          placeholder="Type something..."
          className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-slate-400 appearance-none rounded-tg placeholder-gray-400 focus:outline-none"
        ></textarea>
        {showPhotoInput && (<div className="p-3 mt-2 border-2 border-slate-500 rounded-md">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-gray-600 py-[20px] px-[10px] flex items-center justify-between w-full"
                >
                  <input {...getInputProps()} />
                  <div className="flex items-center justify-between">
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                    <span>
                      <MdOutlineEdit />
                    </span>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>)}
        <footer className="flex justify-between mt-2">
          <div className="flex gap-2">
            <HiPhoto className="text-xl ml-4 text-blue-600 rounded-full hover:bg-blue-200 w-8 h-8 cursor-pointer px-1" onClick={()=>setShowPhotoInput(!showPhotoInput)}/>
            <HiOutlineMapPin className="text-xl ml-4 text-blue-600 rounded-full hover:bg-blue-200 w-8 h-8 cursor-pointer px-1" />
          </div>
          <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">
            Send
            <FaRegPaperPlane className="ml-4" />
          </button>
        </footer>
      </form>
    </div>
  );
};

export default CreatePost;
