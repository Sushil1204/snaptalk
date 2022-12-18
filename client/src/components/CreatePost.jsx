import React, { useState } from "react";
import { HiPhoto, HiOutlineMapPin } from "react-icons/hi2";
import { FaRegPaperPlane } from "react-icons/fa";
import Dropzone from "react-dropzone";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";
import { toast } from "react-toastify";
const CreatePost = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [showPhotoInput, setShowPhotoInput] = useState(false);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

      const response = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setImage(null);
      setPost("");
  };

  return (
    <div>
      <form className="bg-white shadow rounded-lg mb-6 p-4 shadow-xl border border-blue-500">
        <textarea
          placeholder="Type something..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-slate-400 appearance-none rounded-tg placeholder-gray-400 focus:outline-none"
        ></textarea>
        {showPhotoInput && (
          <div className="p-3 mt-2 border-2 border-slate-500 rounded-md">
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-600 py-[20px] px-[10px] flex items-center justify-between w-full cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    <div className="flex items-center justify-between">
                      {!image ? (
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      ) : (
                        <>
                          <p>{image.name}</p>
                          <span>
                            <MdOutlineEdit />
                          </span>
                        </>
                      )}

                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        )}
        <footer className="flex justify-between mt-2">
          <div className="flex gap-2">
            <HiPhoto
              className="text-xl ml-4 text-blue-600 rounded-full hover:bg-blue-200 w-8 h-8 cursor-pointer px-1"
              onClick={() => setShowPhotoInput(!showPhotoInput)}
            />
            <HiOutlineMapPin className="text-xl ml-4 text-blue-600 rounded-full hover:bg-blue-200 w-8 h-8 cursor-pointer px-1" />
          </div>
          <button disabled={!post} type="submit" onClick={handlePost} className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg cursor-pointer">
            Create
            <FaRegPaperPlane className="ml-4" />
          </button>
        </footer>
      </form>
    </div>
  );
};

export default CreatePost;
