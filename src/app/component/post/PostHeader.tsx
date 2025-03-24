import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";

interface PostHeaderInterface {
  title: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  likes: number;
  comments: number;
  category: string;
  color: string;
  views: number;
}

const PostHeader: React.FC<PostHeaderInterface> = ({
  title,
  authorName,
  authorAvatar,
  createdAt,
  likes,
  comments,
  category,
  color,
  views,
}) => {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-slate-800">{title}</h1>
      <div
        className={`inline-block px-4 py-2 text-sm font-medium rounded-md ${color} bg-opacity-10`}
      >
        {category}
      </div>
      <div className="flex items-center space-x-6 text-slate-600">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            {authorAvatar ? (
              <Image
                src={authorAvatar}
                alt={authorName}
                className="w-14 h-14 rounded-full"
              />
            ) : (
              <span className="text-2xl font-semibold text-slate-700">
                {authorName.charAt(0)}
              </span>
            )}
          </div>
          <span className="text-xl font-medium">{authorName}</span>
        </div>

        <span>{new Date(createdAt).toLocaleDateString()}</span>

        <span className="flex items-center gap-4">
          <BiHeart className="h-6 w-6 text-rose-500 hover:text-rose-600 transition-all" />
          <span className="text-lg font-medium">{likes} Likes</span>
        </span>

        <span className="flex items-center gap-4">
          <FiMessageCircle className="h-6 w-6 text-indigo-500" />
          <span className="text-lg font-medium">{comments} Comments</span>
        </span>

        <span className="flex items-center gap-4">
          <FaEye className="h-6 w-6 " />
          <span className="text-lg font-medium">{views} Views</span>
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
