import React from "react";
import { BiCalendar, BiHeart } from "react-icons/bi";
import { FiMessageCircle, FiShare2, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Author {
  name: string;
  avatar: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  author: Author;
  createdAt: string;
  likes: number;
  comments: number;
  category?: string;
  color: string;
  image: string;
}

interface PostCardProps {
  posts: Post[];
  required: boolean;
}

const PostCard = ({ posts, required }: PostCardProps) => {
  const router = useRouter();

  const handleCardClick = (postId: number) => {
    router.push(`/homepage/posts/post-details/${postId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 cursor-pointer"
          onClick={() => handleCardClick(post.id)}
        >
          <div className="relative w-full h-48 overflow-hidden">
            <div
              className="w-full h-48 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${post.image})` }}
              aria-label={`Featured image for ${post.title}`}
            ></div>
          </div>

          <div className="flex justify-between items-center p-4 bg-slate-50 border-b border-slate-100">
            <div className="flex items-center text-slate-500 text-sm">
              <BiCalendar className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            {post.category && (
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${post.color}`}
              >
                {post.category}
              </span>
            )}
          </div>

          <div className="p-6 flex-1 flex flex-col">
            {post.author && (
              <div className="flex items-center mb-4">
                {post.author.avatar && (
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.author.avatar}
                      alt={`${post.author.name}'s avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}

            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
              {post.title}
            </h3>
            <p className="text-slate-600 text-sm mb-6 line-clamp-3">
              {post.description}
            </p>

            <div className="mt-auto flex flex-col space-y-4">
              <button
                className="self-start text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(post.id);
                }}
              >
                Read more <FiArrowRight className="ml-2 h-4 w-4" />
              </button>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-3 text-xs text-slate-500">
                  <div className="flex items-center">
                    <BiHeart
                      className="h-4 w-4 mr-1 text-rose-500"
                      aria-hidden="true"
                    />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMessageCircle
                      className="h-4 w-4 mr-1 text-indigo-500"
                      aria-hidden="true"
                    />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {required && (
                  <button
                    className="text-indigo-600 text-sm flex items-center hover:text-indigo-800 transition-colors"
                    aria-label={`Share post: ${post.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <FiShare2 className="h-4 w-4 mr-1" aria-hidden="true" />
                    Share
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
