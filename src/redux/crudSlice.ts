import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NetworkForm, NetworkPostsProps } from '../page/network'
import { postPosts, updatePostPosts } from '../actions'

export interface CrudState {
  username: string,
}

const initialState: CrudState = {
  username: '',
}

export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload;
    },

    createPost: (state, action: PayloadAction<NetworkForm>) => {
      const newPost = {
        username: state.username,
        title: action.payload.title,
        content: action.payload.content,
      }

      postPosts(newPost)
    },

    updatePost: (state, action: PayloadAction<NetworkPostsProps>) => {
      const updatePost = action.payload

      updatePostPosts(updatePost)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUsername, createPost, updatePost } = crudSlice.actions

export default crudSlice.reducer