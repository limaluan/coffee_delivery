import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICoffeeType, ICoffeeAPIResponse } from "../../types";

export const productsSlice = createApi({
  reducerPath: "productsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coffe-delivery.herokuapp.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<ICoffeeType[], void>({
      query: () => "/produto/buscar",
      transformResponse: (response: ICoffeeAPIResponse) => response.dados,
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;
