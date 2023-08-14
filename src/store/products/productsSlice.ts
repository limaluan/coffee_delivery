import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductType, IProductAPIResponse } from "../../shared/types";

export const productsSlice = createApi({
  reducerPath: "productsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coffe-delivery.herokuapp.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProductType[], void>({
      query: () => "/produto/buscar",
      transformResponse: (response: IProductAPIResponse) => response.dados,
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;
