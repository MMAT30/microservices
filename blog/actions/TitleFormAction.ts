"use server";

import { revalidatePath } from "next/cache";

export const TitleFormAction = async (
  formState: { message: string; title: string; isValid: boolean },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;

    if (!formData.get("title")) {
      return {
        ...formState,
        message: "Title is required",
      };
    }

    if (title.length < 5) {
      return {
        ...formState,
        message: "Title must be at least 5 characters",
      };
    }

    await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    revalidatePath("/");
    return formState;
  } catch (error) {

    return {
      ...formState,
      message: "Oops! Something went wrong, please try again",
    };
  }
};



interface IPosts {
  id: number;
  title: string;
}

export const getPostsAction = async (
  formState: { posts: IPosts},
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;
    console.log(title);

    if (!formData.get("title")) {
      return {
        ...formState,
        message: "Title is required",
      };
    }

    if (title.length < 5) {
      return {
        ...formState,
        message: "Title must be at least 5 characters",
      };
    }

    await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "" }),
    });

    revalidatePath("/");
    return formState;
  } catch (error) {
    revalidatePath("/");
    return {
      ...formState,
      message: "Oops! Something went wrong, please try again",
    };
  }
};



export const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:4000/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const posts: IPosts[] = await res.json();
    return posts;
  } catch (error) {
    return [];
  }
};
