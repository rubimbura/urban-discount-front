import { createSlice } from '@reduxjs/toolkit'

type NotificationPanel = {
  message: string,
  show: boolean,
  type: string,
}

const initialState: NotificationPanel = {
  message: '',
  show: false,
  type: '',
}

const NotificationPanelSlice = createSlice({
  name: 'notificationPanel',
  initialState,
  reducers: {
    notificationPanel: (state, action) => {
      state.message = action.payload.message
      state.show = action.payload.show
      state.type = action.payload.type
    },
  },
})

export const { notificationPanel } = NotificationPanelSlice.actions

export default NotificationPanelSlice.reducer
