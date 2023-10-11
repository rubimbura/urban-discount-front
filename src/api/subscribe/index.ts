/* eslint-disable @typescript-eslint/ban-types */
import QueryTags from '../types/QueryTags'



import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'


const baseUrl = '/customer'

const subscribeEndpoints = (builder: EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, QueryTags, 'data'>) =>
  ({
    getSubscriptions: builder.query<any, any>({
      query: () => `${baseUrl}`,
    }),
    getDashboard: builder.query<any, any>({
      query:() => `/dashboard`,
      providesTags: ['subscribe']
    }),
    subscribe: builder.mutation<any, any>({
      query: (body) => ({
        url: `${baseUrl}`,
        method: 'post',
        body,
      }),
      invalidatesTags: ['subscribe']
    }),

    fetchDistricts: builder.query<any, any>({
      query: () => `address/OL05000005`
    }),

    fetchSectors: builder.query<any, string>({
      query: (id) => `address/${id}`
    }),
    fetchCountDown: builder.query<any, any>({
      query: () => `/basic-settings`
    })
  })

export default subscribeEndpoints
