"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/post/postSlice";
import PostTable from "@/components/PostTable";
import AddPostForm from "@/components/AddPostForm";
import LoadingAnimation from "@/components/Loading";
import Error from "@/components/Error";

export default function PostsPage() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="p-10">
      {/* CREATE */}
      <AddPostForm />

      {/* READ */}
      {loading && <LoadingAnimation />}
      {error && <Error />}

      {!loading && !error && <PostTable posts={posts} />}
    </div>
  );
}
