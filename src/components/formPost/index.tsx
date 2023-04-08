import React from "react";
import { useForm } from "react-hook-form";
import { NetworkForm, NetworkPostsProps } from "../../page/network";
import { createPost } from "../../redux/crudSlice";
import { useDispatch } from "react-redux";

type FormPost = {
  titleForm: string;
  editPost?: NetworkPostsProps;
};

export function FormPost({ titleForm, editPost }: FormPost) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<NetworkForm>();

  return (
    <div
      className={`${
        editPost != undefined ? "bg-white" : ""
      } p-6 py-6 flex flex-col gap-6"`}
    >
      <h2 className="font-roboto font-bold text-[22px] leading-6">
        {titleForm}
      </h2>

      <form
        className="grid gap-6"
        action="POST"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full h-8 py-2 px-[10.68px] outline-none border border-[#777] rounded-lg"
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="w-full h-[4.625rem] py-2 px-[10.68px] outline-none border border-[#777] rounded-lg resize-none"
            placeholder="Content"
            {...register("content", {
              required: true,
            })}
          />
        </div>

        <div className="w-full h-auto mt-2 flex items-center justify-end gap-4">
          {editPost == undefined ? (
            <button
              className={`w-[6.9375rem] h-8 text-white bg-[#7695EC] rounded-lg ${
                isValid ? "opacity-100 btn" : "opacity-80"
              }`}
              type="submit"
              disabled={!isValid}
            >
              CREATE
            </button>
          ) : (
            <>
                <button
                className={`w-[6.9375rem] h-8 text-dark rounded-lg border border-[#000]`}
                type="submit"
                >
                    Cancel
                </button>

                <button
                className={`w-[6.9375rem] h-8 text-dark rounded-lg bg-[#47B960]`}
                type="submit"
                >
                    Save
                </button>
            </>
          )}
        </div>
      </form>
    </div>
  );

  function submit(event: any) {
    dispatch(createPost(event));
    setValue("content", "");
    setValue("title", "");
  }
}
