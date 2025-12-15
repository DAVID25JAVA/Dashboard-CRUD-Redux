"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  updatePost,
  clearEditingPost,
} from "@/app/features/post/postSlice";

export default function AddPostForm() {
  const dispatch = useDispatch();
  const editingPost = useSelector((state) => state.posts.editingPost);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 👇 Populate form when Edit is clicked
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body || "");
    }
  }, [editingPost]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editingPost) {
      // UPDATE
      dispatch(
        updatePost({
          ...editingPost,
          title,
          body,
        })
      );
    } else {
      // CREATE
      dispatch(
        addPost({
          id: Date.now(),
          title,
          body,
        })
      );
    }

    setTitle("");
    setBody("");
    dispatch(clearEditingPost());
  };

  return (
    <form onSubmit={submitHandler} className="mb-6 space-y-2">
      <h2 className="font-semibold">
        {editingPost ? "Edit Post" : "Add New Post"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Body"
        className="border p-2 w-full"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <div className="space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2">
          {editingPost ? "Update Post" : "Add Post"}
        </button>

        {editingPost && (
          <button
            type="button"
            onClick={() => dispatch(clearEditingPost())}
            className="bg-gray-400 text-white px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
