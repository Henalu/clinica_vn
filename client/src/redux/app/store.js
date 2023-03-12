import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../tasks/menuSlice";

export const store = configureStore({
  reducer: {
    menuSlice
  }
})

export default store;