import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NetworkForm, NetworkPostsProps } from "../../page/network";
import { createPost, updatePost } from "../../redux/crudSlice";
import { useDispatch } from "react-redux";

type FormPostProps = {
  titleForm: string;
  editPost?: NetworkPostsProps;
  setEditPost?: (editPost: NetworkPostsProps) => void;
};

export function FormPost({ titleForm, editPost, setEditPost }: FormPostProps) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<NetworkForm>();

  useEffect(() => {
    if(editPost != undefined){
      setValue("title", `${editPost.title}`)
      setValue("content", `${editPost.content}`)
      setValue("username", `${editPost.username}`)
    }
  }, [])

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
                  type="button"
                  onClick={() => handleCancelEditPost()}
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
    if(editPost != undefined){
      dispatch(createPost(event));
    }
    else{
      dispatch(updatePost(event))
    }
    setValue("content", "");
    setValue("title", "");
  }

  function handleCancelEditPost(){
    if(setEditPost != undefined){
      setEditPost({} as NetworkPostsProps)
    }
  }
}
