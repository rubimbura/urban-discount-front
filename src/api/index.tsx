import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import subscribeEndpoints from './subscribe'

const DcoreUrl = process.env.REACT_APP_D_CORE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: DcoreUrl,
  prepareHeaders: (headers, {endpoint}) => {
    const obj = sessionStorage.getItem('currentUser')
    const currentUser: any = obj ? JSON.parse(obj) : null
    const token = currentUser?.token

    if(token){
      headers.set('Authorization', `Bearer ${token?.access_token}`) 
    }
    headers.set('X-Channel', 'INTERNET_BANKING')
    headers.set('Content-Type', 'application/json')
    headers.set('accept', 'application/json')
    headers.set('lang', 'ENGLISH')
    return headers
  },
})

const baseQueryIntercep: typeof baseQuery = async (args, api, extraOptions ) => {
  let queryResult = await baseQuery(args, api, extraOptions)
  return queryResult
}

const appApi = createApi({
  reducerPath: 'data',
  baseQuery: baseQueryIntercep,
  tagTypes: [
    'subscribe',
  ],
  endpoints: (builder) => ({
    ...subscribeEndpoints(builder)
  }),
})

export default appApi

export const {
  useSubscribeMutation,
  useGetSubscriptionsQuery,
  useGetDashboardQuery,
  useFetchDistrictsQuery,
  useFetchSectorsQuery,
} = appApi
