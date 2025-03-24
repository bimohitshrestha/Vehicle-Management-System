import { useState } from "react";
import { BsShare, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const PostActions = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <>
      <div className="flex items-center space-x-4 mt-6">
        <span className="text-xl font-medium text-slate-800">
          Share this post:
        </span>
        <button
          onClick={toggleShareOptions}
          className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 transition-all cursor-pointer"
        >
          <BsShare className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>

      {showShareOptions && (
        <div className="flex space-x-4 mt-4">
          <a href="" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={20} />
          </a>
          <a href="" className="text-rose-600 hover:text-rose-600">
            <FaInstagram size={20} />
          </a>
          <a href="" className="text-white hover:text-slate-950">
            <BsTwitterX size={20} />
          </a>
          <a href="" className="text-blue-700 hover:text-blue-800">
            <FaLinkedin size={20} />
          </a>
        </div>
      )}
    </>
  );
};

export default PostActions;
