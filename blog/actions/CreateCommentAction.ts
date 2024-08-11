"use server";

import { revalidatePath } from "next/cache";

export const CreateCommentAction = async (
  formState: { message: string; title: string; isValid: boolean },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;

   

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
