import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

const rootReducer = {
  note: noteSlice,
};

console.log("rootReducer :", rootReducer);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
