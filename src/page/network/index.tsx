import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";

type NetworkForm = {
  title: string;
  content: string;
};

export function Network() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NetworkForm>();

  return (
    <>
      <header className="w-screen h-auto bg-[#7695EC] py-7 px-9">
        <h1 className="text-white font-roboto font-bold text-[22px] leading-6">
          CodeLeap Network
        </h1>
      </header>

      <main className="w-full h-auto p-6 flex flex-col gap-6 items-center justify-center">
        <section className="w-3/4 md:w-[47rem] h-auto bg-[#fff] border border-[#999] rounded-2xl">
          <div className="p-6 py-6 flex flex-col gap-6">
            <h2 className="font-roboto font-bold text-[22px] leading-6">
              What's on your mind?
            </h2>

            <form className="grid gap-6" action="">
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

              <div className="w-full h-auto mt-2 flex items-center justify-end">
                <button
                  className={`w-[6.9375rem] h-8 text-white bg-[#7695EC] rounded-lg ${
                    isValid ? "opacity-100 btn" : "opacity-80"
                  }`}
                  type="submit"
                  disabled={!isValid}
                >
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}