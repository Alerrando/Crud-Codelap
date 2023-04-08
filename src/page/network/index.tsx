import React, { useEffect, useState } from "react";
import { Posts } from "../../components/posts";
import { getPosts } from "../../actions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/modal";
import { FormPost } from "../../components/formPost";
import { Pagination } from "../../components/pagination";

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
  const { username } = useSelector((aciton: RootState) => aciton.crud);
  const [networkPosts, setNetworkPosts] = useState<NetworkPostsProps[]>([]);
  const [editPost, setEditPost] = useState<NetworkPostsProps>(
    {} as NetworkPostsProps
  );
  const postsPorPage = 10;
  const [pageNumber, setPageNumber] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await getPosts(postsPorPage, postsPorPage * pageNumber);
      setPageTotal(response.count);
      setNetworkPosts(response.results);
    })();
  }, [pageNumber, networkPosts]);

  if (username.length == 0) {
    return <Navigate replace to="/login" />;
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

        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageTotal={pageTotal}
        />

        {networkPosts.length > 0 ? (
          networkPosts.map((post) => (
            <Posts post={post} setEditPost={setEditPost} key={post.id} />
          ))
        ) : (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        )}

        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageTotal={pageTotal}
        />
      </main>

      {Object.keys(editPost).length > 0 ? (
        <Modal editPost={editPost} setEditPost={setEditPost} />
      ) : null}
    </>
  );
}
