import { configureStore } from '@reduxjs/toolkit'

import appApi from './api'
import notificationPanel from './slice/NotificiationPanel'



export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
  reducer: {
    notificationPanel,
    [appApi.reducerPath]: appApi.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
