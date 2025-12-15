"use client";

import { useDispatch } from "react-redux";
import {
  deletePost,
  setEditingPost,
} from "@/app/features/post/postSlice";

export default function PostTable({ posts }) {
  const dispatch = useDispatch();

  return (
    <table className="w-full border">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="border p-2">{post.id}</td>
            <td className="border p-2">{post.title}</td>
            <td className="border p-2 space-x-2">
              {/* EDIT */}
              <button
                className="bg-yellow-500 px-2 py-1 text-white"
                onClick={() => dispatch(setEditingPost(post))}
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                className="bg-red-600 px-2 py-1 text-white"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
