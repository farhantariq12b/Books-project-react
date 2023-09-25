import GoogleBooksApi from "../../api/GoogleBooks";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
  "books/getAll",
  async ({ query, page }: any, { rejectWithValue }: any) => {
    try {
      const { data, status } = await GoogleBooksApi.get("", {
        params: {
          q: JSON.stringify(query),
          key: "AIzaSyD1Ppg1eYOfb1S8Ez5Baghv9JLsXqB5ub8",
          maxResults: 10,
          startIndex: (page - 1) * 10,
        },
      });
      if (status === 200) {
        return data;
      }
    } catch (e: any) {
      console.warn(e);
      return rejectWithValue(e.message);
    }
  }
);
