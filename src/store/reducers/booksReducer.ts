import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../actions/booksAction";

const initialState: any = {
  books: { kind: "", totalItems: 0, items: [] },
  error: null,
  loading: false,
};

const productSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.books = payload;
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.books = { kind: "", totalItems: 0, items: [] };
      });
  },
});

export default productSlice.reducer;
