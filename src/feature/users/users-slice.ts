import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./action-creators";

interface UsersState {
  users: IUser[],
  isLoading: boolean,
  error: string | undefined,
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: undefined
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, // see the counter example for reducers option
  extraReducers: {
    // handling the state for each intermediate state for the fetchUser action
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = undefined;
      state.users = action.payload;
    }
  }
});

export default userSlice.reducer;