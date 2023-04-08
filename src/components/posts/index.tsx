import React, { useState } from "react";
import { NetworkPostsProps } from "../../page/network";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { deletePostPosts } from "../../actions";

type PostsProps = {
  post: NetworkPostsProps;
  setEditPost: (editPost: NetworkPostsProps) => void;
};


export function Posts({ post, setEditPost }: PostsProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<Boolean>(false);

  return (
    <div className="w-3/4 md:w-[47rem] h-[316px] bg-[#fff] border border-[#999] rounded-2xl">
      <header className="w-full h-auto flex flex-row items-center justify-between bg-[#7695EC] py-7 px-9 rounded-t-2xl">
        <h2 className="text-white font-roboto font-bold text-[22px] leading-6">
          {post.title}
        </h2>

        <div className="w-auto h-auto flex flex-row gap-[34.2px]">
          <RiDeleteBin2Line
            size={22}
            className="cursor-pointer"
            color="white"
            onClick={() => handleDeletePost(false)}
          />
          <FiEdit
            size={22}
            className="cursor-pointer"
            color="white"
            onClick={() => setEditPost(post)}
          />
        </div>
      </header>

      <section className="w-full h-full p-6 flex flex-col gap-6">
        <div className="w-full h-auto flex items-center justify-between">
          <span className="text-[#777] font-roboto font-bold text-lg leading-[21px]">{`@${post.username}`}</span>
          <span>{checkExceedLimit()}</span>
        </div>

        <span className="text-dark font-roboto font-bold text-lg leading-[21px]">
          {post.content}
        </span>
      </section>

      {showDeleteConfirmation ? (
        <div className="fixed flex items-center justify-center inset-0 bg-modal">
          <div className="w-2/3 md:w-[41.25rem] h-auto flex flex-col gap-10 bg-white p-6">
            <h2 className="font-roboto font-bold text-[22px] leading-6">Are you sure you want to delete this item?</h2>

            <div className="w-full h-auto mt-2 flex items-center justify-end gap-4">
              <button
                  className={`w-[6.9375rem] h-8 text-dark rounded-lg border border-[#000]`}
                  type="button"
                  onClick={() => setShowDeleteConfirmation(false)}
                >
                    Cancel
                </button>

                <button
                  className={`w-[6.9375rem] h-8 text-white rounded-lg bg-[#FF5151]`}
                  type="submit"
                  onClick={() => handleDeletePost(true)}
                >
                    Delete
                </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  function handleDeletePost(deletePost: Boolean){
    setShowDeleteConfirmation(true);

    if(deletePost){
      deletePostPosts(post);
      setShowDeleteConfirmation(false);
    }
  }

  function checkExceedLimit() {
    let newDate = new Date();
    let differenceDate = Math.floor(
      (newDate.getTime() - new Date(post.created_datetime).getTime()) /
        (24 * 3600 * 1000)
    );

    if (differenceDate == 0) {
      const minutes = checkDifferenceInMinutes(newDate);

      if (minutes > 60) {
        const hours = checkDifferenceInHours(newDate);

        return `${hours} ${hours > 1 ? "hours" : "hour"} ago`;
      }

      return `${minutes} ${minutes > 1 ? "minutes" : "minute"} ago`;
    }

    return `${differenceDate} ${differenceDate > 1 ? "days" : "day"} ago`;
  }

  function checkDifferenceInMinutes(newDate: Date) {
    let diff = Math.abs(
      newDate.getTime() - new Date(post.created_datetime).getTime()
    );
    let minutes = Math.floor(diff / 1000 / 60);

    return minutes;
  }

  function checkDifferenceInHours(newDate: Date) {
    let diffInMilliSeconds =
      Math.abs(newDate.getTime() - new Date(post.created_datetime).getTime()) /
      1000;
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;

    return hours;
  }
}
