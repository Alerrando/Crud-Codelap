import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
        console.log(action.payload)
        state.username = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUsername } = crudSlice.actions

export default crudSlice.reducer