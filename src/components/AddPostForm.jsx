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

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body || "");
    }
  }, [editingPost]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editingPost) {
      dispatch(updatePost({ ...editingPost, title, body }));
    } else {
      dispatch(addPost({ id: Date.now(), title, body }));
    }

    setTitle("");
    setBody("");
    dispatch(clearEditingPost());
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mb-6 space-y-4 bg-white shadow-md p-6 rounded-lg"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        {editingPost ? "Edit Post" : "Add New Post"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Body"
        className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows={4}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {editingPost ? "Update Post" : "Add Post"}
        </button>

        {editingPost && (
          <button
            type="button"
            onClick={() => dispatch(clearEditingPost())}
            className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
