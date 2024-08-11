"use client";

import { TitleFormAction } from "@/actions/TitleFormAction";
import { PostType } from "@/types/PostType";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function CommentForm({ id }: {id: number}) {
  // const [titleForm, setTitleFormAction] = useFormState(TitleFormAction, {
  //   message: "",
  //   title: "",
  //   isValid: true,
  // });

  // const [isValid, setIsValid] = useState(titleForm.isValid);

  return (
    <div className="border-y-2 py-2">
      <form>
        {/* {titleForm.isValid && (
          <div className="text-red-600 text-sm">{titleForm.message}</div>
        )} */}
        <div className={`flex border-2 rounded-xl border-red-600`}>
          <div
            className={`flex-1 text-center py-2 px-4 border-r-2 border-red-600"
            `}
          >
            <label htmlFor="title">Create Comment</label>
          </div>

          <div className="container">
            <input
              type="text"
              name="title"
              className="w-full h-full text-center rounded-xl rounded-l-none focus:outline-none"
            />
          </div>
        </div>
        <p>{id}</p>
        <button
          // disabled={!titleForm.isValid}
          className={`border-2 border-green-600 bg-green-600  text-white rounded-xl py-2 px-4 mt-4`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
