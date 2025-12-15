"use client";

import { useDispatch } from "react-redux";
import { deletePost, setEditingPost } from "@/app/features/post/postSlice";

export default function PostTable({ posts }) {
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full border-collapse ">
        <thead className="bg-indigo-100 text-left">
          <tr>
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Title</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{post.id}</td>
              <td className="p-3 border-b">{post.title}</td>
              <td className="p-3 border-b space-x-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => dispatch(setEditingPost(post))}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                  onClick={() => dispatch(deletePost(post.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {posts.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center p-4 text-gray-500">
                No posts available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
