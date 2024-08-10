"use client";

import React from "react";
import { PostListType } from "@/types/PostListType";

type PostListProps = {
  posts: PostListType;
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.values(posts).map((post) => (
        <div key={post.id} className="border rounded-xl p-4 my-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostList;
