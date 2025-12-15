'use client';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsAPI } from "./postService";

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async () => {
    const data = await fetchPostsAPI();
    return data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    editingPost: null,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
      state.editingPost = null;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setEditingPost: (state, action) => {
      state.editingPost = action.payload;
    },
    clearEditingPost: (state) => {
      state.editingPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addPost,
  updatePost,
  deletePost,
  setEditingPost,
  clearEditingPost,
} = postSlice.actions;

export default postSlice.reducer;
