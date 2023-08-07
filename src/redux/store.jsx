import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "@redux/newsStore";

const store = configureStore({
  reducer: {
   'newsStore' : newsSlice.reducer,
  }
})
export default store;
