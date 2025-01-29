import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApis } from "../lib/APIs/authApis";
import { userApis } from "../lib/APIs/userApis";
import { userSlice } from "../lib/redux/userSlice";
export const store = configureStore({
  reducer: {
    [userApis.reducerPath]: userApis.reducer,
    [authApis.reducerPath]: authApis.reducer,
    userState: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApis.middleware, authApis.middleware),
});

setupListeners(store.dispatch);
