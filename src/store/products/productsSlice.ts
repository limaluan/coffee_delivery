import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsData } from "../../shared/types";

export const productsSlice = createApi({
  reducerPath: "productsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coffe-delivery.herokuapp.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsData[], void>({
      query: () => "/produto/buscar",
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;
