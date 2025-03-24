"use client";
import React, { useState } from "react";
import PostCard from "@/app/component/card/PostCard";

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

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      image:
        "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      category: "Tips",
      color: "text-red-500",
      image:
        "https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      category: "Fleet Updates",
      color: "text-yellow-500",
      image:
        "https://images.unsplash.com/photo-1609174470568-ac0c96458a67?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      category: "Lorem",
      color: "text-blue-500",
      image:
        "https://plus.unsplash.com/premium_photo-1661963005592-182d602c6a3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      category: "Follow",
      color: "text-blue-500",
      image:
        "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            All Posts
          </h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            />
          </div>
        </div>

        <PostCard posts={filteredPosts} required={true} />
      </div>
    </div>
  );
};

export default Page;
