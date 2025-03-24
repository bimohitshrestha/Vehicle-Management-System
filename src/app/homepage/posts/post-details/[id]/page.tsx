"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import PostHeader from "@/app/component/post/PostHeader";
import PostBody from "@/app/component/post/PostBody";
import PostActions from "@/app/component/post/PostAction";
import CommentsSection from "@/app/component/post/CommentSection";
import RelatedPosts from "@/app/component/post/RelatedPosts";

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
  views: number;
  content?: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (id) {
      const posts: Post[] = [
        {
          id: 1,
          title: "Testing",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et.",
          author: {
            name: "TTitle",
            avatar: "",
          },
          createdAt: "2025-03-14",
          likes: 24,
          comments: 8,
          category: "Maintenance",
          color: "text-teal-500",
          image: "/bike1.png",
          views: 33,
        },
        {
          id: 2,
          title: "lorem",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et.",
          author: {
            name: "Title",
            avatar: "",
          },
          createdAt: "2025-03-16",
          likes: 37,
          comments: 12,
          views: 63,
          category: "Tips",
          color: "text-red-500",
          content: "",
          image: "/bike2.png",
        },
        {
          id: 3,
          title: "Tested",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et.",
          author: {
            name: "Testing",
            avatar: "",
          },
          createdAt: "2025-03-18",
          likes: 42,
          comments: 15,
          views: 70,
          category: "Fleet Updates",
          color: "text-yellow-500",
          image: "/bike3.png",
        },
        {
          id: 4,
          title: "Tested1",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et.",
          author: {
            name: "Testing",
            avatar: "",
          },
          createdAt: "2025-03-18",
          likes: 21,
          comments: 5,
          views: 69,
          category: "Lorem",
          color: "text-blue-500",
          image: "/bike4.png",
        },
        {
          id: 5,
          title: "Tested123",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et.",
          author: {
            name: "Testing123",
            avatar: "",
          },
          createdAt: "2025-03-19",
          likes: 31,
          comments: 15,
          views: 50,
          category: "Follow",
          color: "text-blue-500",
          image: "/bike5.png",
        },
      ];

      const postId =
        typeof id === "string"
          ? parseInt(id)
          : Array.isArray(id)
          ? parseInt(id[0])
          : 0;

      const foundPost = posts.find((post) => post.id === postId);

      if (foundPost) {
        setPost(foundPost);
        let categoryRelatedPosts = posts.filter(
          (post) =>
            post.category === foundPost.category && post.id !== foundPost.id
        );
        if (categoryRelatedPosts.length === 0) {
          categoryRelatedPosts = posts
            .filter((post) => post.id !== foundPost.id)
            .slice(0, 3);
        }
        setRelatedPosts(categoryRelatedPosts);
      } else {
        console.log("Page not found");
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="bg-white text-black h-screen">Loading...</div>;
  }

  if (!post) {
    return <div className="py-12 px-4 max-w-6xl mx-auto">Post not found</div>;
  }

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/homepage/posts"
          className="flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-all duration-300"
        >
          <BsArrowLeft className="h-5 w-5 mr-2" />
          Back to Posts
        </Link>

        <PostHeader
          title={post.title}
          authorName={post.author.name}
          authorAvatar={post.author.avatar}
          createdAt={post.createdAt}
          likes={post.likes}
          comments={post.comments}
          category={post.category || ""}
          color={post.color}
          views={post.views}
        />

        <PostBody description={post.description} image={post.image} />

        <PostActions />

        <CommentsSection />

        {relatedPosts.length > 0 && (
          <RelatedPosts relatedPosts={relatedPosts} />
        )}
      </div>
    </div>
  );
};

export default PostDetail;
