import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "@/common/interface/post";

const initialState: PostType[] = [];

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: () => initialState,
    pushPosts: (state, action: PayloadAction<PostType[]>) => {
      if (Array.isArray(action.payload)) {
        state.push(...action.payload);
      }
    },
  },
});

export const { reset, pushPosts } = posts.actions;
export default posts.reducer;
