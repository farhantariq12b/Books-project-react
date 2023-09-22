import axios from "axios";

const GoogleBooksApi = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`,
});

export default GoogleBooksApi;
