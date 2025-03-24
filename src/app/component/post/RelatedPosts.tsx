import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";

interface Post {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  likes: number;
  views: number | string;
  image: string;
}

interface RelatedPostsProps {
  relatedPosts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ relatedPosts }) => {
  return (
    <div className="mt-12">
      <h3 className="text-3xl font-semibold text-slate-800">Related Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {relatedPosts.map((relatedPost) => (
          <div
            key={relatedPost.id}
            className="bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative mb-4">
              <Image
                src={relatedPost.image}
                alt={relatedPost.title}
                className="object-cover rounded-lg"
                width={640}
                height={210}
              />
            </div>
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">
              <Link href={``} className="hover:text-indigo-800">
                {relatedPost.title}
              </Link>
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              {new String(relatedPost.description).substring(0, 100)}...
            </p>
            <div className="flex justify-between text-sm text-gray-400">
              <p>{new Date(relatedPost.createdAt).toLocaleDateString()}</p>
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-1 cursor-pointer">
                  <BiHeart className="w-4 h-4 text-rose-500" title="likes" />
                  <span>{relatedPost.likes}</span>
                </span>
                <span className="flex items-center space-x-1 cursor-pointer">
                  <FaEye className="w-4 h-4 " title="views" />
                  <span>{relatedPost.views}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
