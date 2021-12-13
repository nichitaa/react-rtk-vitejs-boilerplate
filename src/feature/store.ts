import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter-slice";
import userReducer from "./users/users-slice";
import { postAPI } from "./posts/posts-api-slice";

const rootReducer = combineReducers({
  counter: counterReducer, // simple counter slice example
  [postAPI.reducerPath]: postAPI.reducer, // post api with auto generated hooks
  users: userReducer // same pattern as counter, but instead handling the request intermediary statuses by ourselves
});

export const setupStore = () => {
  return configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(postAPI.middleware),
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]