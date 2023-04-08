import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Posts } from "../../components/posts";
import { getPosts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/crudSlice";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/modal";
import { FormPost } from "../../components/formPost";

export type NetworkForm = {
  username?: string;
  title: string;
  content: string;
};

export type NetworkPostsProps = {
  id: number;
  created_datetime: Date;
  username: string;
} & NetworkForm;

export function Network() {
  const { username } = useSelector((aciton: RootState) => aciton.crud)
  const [networkPosts, setNetworkPosts] = useState<NetworkPostsProps[]>([]);
  const [editPost, setEditPost] = useState<NetworkPostsProps>({} as NetworkPostsProps);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue
  } = useForm<NetworkForm>();

  useEffect(() => {
    (async () => {
      setNetworkPosts(await getPosts());
    })();
  }, []);

  if(username.length == 0){
    return <Navigate replace to="/login" />
  }

  return (
    <>
      <header className="w-full h-auto bg-[#7695EC] py-7 px-9">
        <h1 className="text-white font-roboto font-bold text-[22px] leading-6">
          CodeLeap Network
        </h1>
      </header>

      <main className="w-full h-auto py-6 flex flex-col gap-6 items-center justify-center">
        <section className="w-3/4 md:w-[47rem] h-auto bg-[#fff] border border-[#999] rounded-2xl">
          <FormPost titleForm="What's on your mind?" />
        </section>
        {networkPosts.length > 0
          ? networkPosts.map((post) => <Posts post={post} setEditPost={setEditPost} key={post.id} />)
          : null}
      </main>

      {Object.keys(editPost).length > 0 ? (
        <Modal editPost={editPost} />
      ) : null}
    </>
  );

}
