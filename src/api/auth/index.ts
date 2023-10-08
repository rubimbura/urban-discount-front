/* eslint-disable @typescript-eslint/ban-types */
import QueryTags from '../types/QueryTags'



import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'


const authBasePath = '/customer'

const authEndpoints = (builder: EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, QueryTags, 'data'>) =>
  ({
    subscribe: builder.mutation<any, any>({
      query: (body) => ({
        url: `${authBasePath}`,
        method: 'post',
        body,
      }),
      invalidatesTags: ['subscribe']
    }),
  })

export default authEndpoints
