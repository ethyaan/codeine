import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "@/common/types/post";

const initialState = {} as PostType;

export const post = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
    pushPost: (state, action: PayloadAction<PostType>) => {
      state = action.payload as PostType;
    },
  },
});

export const { reset, pushPost } = post.actions;
export default post.reducer;
