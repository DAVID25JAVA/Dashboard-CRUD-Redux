'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "@/app/features/post/postSlice";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: ""
  });
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    }
    
    if (!formData.body.trim()) {
      newErrors.body = "Body is required";
    } else if (formData.body.length < 10) {
      newErrors.body = "Body must be at least 10 characters";
    }
    
    if (!formData.userId) {
      newErrors.userId = "User ID is required";
    } else if (formData.userId < 1 || formData.userId > 10) {
      newErrors.userId = "User ID must be between 1 and 10";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newPost = {
      id: Date.now(),
      title: formData.title.trim(),
      body: formData.body.trim(),
      userId: parseInt(formData.userId)
    };

    dispatch(addPost(newPost));
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-14">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <button className="flex items-center gap-2 bg-indigo-100 px-2 rounded-full cursor-pointer text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Create New Post</h1>
          <p className="text-gray-600 mt-2">Fill in the details below to create a new post</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Post Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter post title"
                className={`w-full px-4 py-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label htmlFor="body" className="block text-sm font-semibold text-gray-700 mb-2">
                Post Body <span className="text-red-500">*</span>
              </label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Enter post content"
                rows="6"
                className={`w-full px-4 py-3 border ${errors.body ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
              />
              {errors.body && (
                <p className="mt-1 text-sm text-red-500">{errors.body}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {formData.body.length} characters
              </p>
            </div>

            <div>
              <label htmlFor="userId" className="block text-sm font-semibold text-gray-700 mb-2">
                User ID <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="Enter user ID (1-10)"
                min="1"
                max="10"
                className={`w-full px-4 py-3 border ${errors.userId ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
              />
              {errors.userId && (
                <p className="mt-1 text-sm text-red-500">{errors.userId}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Enter a user ID between 1 and 10
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                Create Post
              </button>
              <Link href="/" className="flex-1">
                <button
                  type="button"
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}