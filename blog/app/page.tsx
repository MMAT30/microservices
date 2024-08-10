"use server";
import { GetPostsAction } from "@/actions/GetPostsAction";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { PostListType } from "@/types/PostListType";



export default async function Home() {
  const posts: PostListType = await GetPostsAction();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostForm />
      <PostList posts={posts} />
    </div>
  );
}
