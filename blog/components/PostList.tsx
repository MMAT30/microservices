"use client";

import React from "react";
import { PostListType } from "@/types/PostListType";
import CommentForm from "./CommentForm";

type PostListProps = {
  posts: PostListType;
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.values(posts).map((post) => (
        <div key={post.id} className="border-2 rounded-xl p-4 my-4 shadow-xl">
          <h2 className="text-xl font-bold">{post.title}</h2>

          <CommentForm id={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
