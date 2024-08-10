import { PostListType } from "@/types/PostListType";

export async function GetPostsAction() {
  try {
    const res = await fetch("http://localhost:4000/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const posts: PostListType = await res.json();
    return posts;
  } catch (error) {
    return {};
  }
}
