"use client"

import { TitleFormAction } from "@/actions/TitleFormAction"
import { useState } from "react"
import { useFormState } from "react-dom"

export default function PostForm() {

    const [titleForm, setTitleFormAction] = useFormState(TitleFormAction, {
    message: "",
    title: "",
    isValid: true
    })
  
    const [isValid, setIsValid] = useState(titleForm.isValid)

    return (<div className="border-2 rounded-xl shadow-xl p-6 m-0 ">
        <p className=" text-[32px]">Create Post</p>
        <form action={setTitleFormAction}>
          {titleForm.isValid && (
            <div className="text-red-600 text-sm">
              {titleForm.message}
            </div>
          )}
          <div
            className={`flex border-2 rounded-xl ${
              titleForm.isValid ? null : "border-red-600"
            }`}
          >
            <div
              className={`flex-1 text-center py-2 px-4 border-r-2  ${
                titleForm.isValid ? null : "border-red-600"
              }`}
            >
              <label htmlFor="title">Enter Title</label>
            </div>

            <div className="">
              <input
                type="text"
                name="title"
                className="flex-1 text-center py-2 px-4 rounded-xl rounded-l-none focus:outline-none"
              />
            </div>
          </div>
        <button
          disabled={!titleForm.isValid}
            className={`border-2 ${
              titleForm.isValid
                ? "border-green-600 bg-green-600"
                : "border-red-600 bg-red-600"
            } text-white rounded-xl py-2 px-4 mt-4`}
          >
            Submit
          </button>
        </form>
    </div>
            )
}