import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import PostCard from "../card/PostCard";

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

const LatestPosts: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "Testing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et. Praesentium quis deserunt ex?",
      author: {
        name: "TTitle",
        avatar: "",
      },
      createdAt: "2025-03-14",
      likes: 24,
      comments: 8,
      category: "Maintenance",
      color: "text-teal-500",
      image:
        "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "lorem",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et. Praesentium quis deserunt ex?",
      author: {
        name: "Title",
        avatar: "",
      },
      createdAt: "2025-03-16",
      likes: 37,
      comments: 12,
      category: "Tips",
      color: "text-red-500",
      image:
        "https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Tested",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta in ducimus quis ullam at, commodi odio repudiandae atque fugit beatae ipsa ab consequatur, cum et. Praesentium quis deserunt ex?",
      author: {
        name: "Testing",
        avatar: "",
      },
      createdAt: "2025-03-18",
      likes: 42,
      comments: 15,
      category: "Fleet Updates",
      color: "text-yellow-500",
      image:
        "https://images.unsplash.com/photo-1609174470568-ac0c96458a67?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="py-12 px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold relative text-secondary">
            <span className="relative z-10 ">Latest Posts</span>
          </h2>
          <Link
            href="/homepage/posts"
            className="flex items-center group text-primary font-medium"
          >
            <span>View all posts</span>
            <BsArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <PostCard posts={posts} required={true} />
      </div>
    </div>
  );
};

export default LatestPosts;
