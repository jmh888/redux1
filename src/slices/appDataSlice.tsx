import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface AppDataState {
  value: any
}

// Define the initial state using that type
const initialState: AppDataState = {
  value: {},
}

type SetAppDataPayload = {
  [key: string]: any
}

export const appDataSlice = createSlice({
  name: 'appData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAppData: (state, action: PayloadAction<SetAppDataPayload>) => {
      state.value[action.payload.key] = action.payload.value
    },
  },
})

export const { setAppData } = appDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAppData = (state: RootState) => state.appData.value

export default appDataSlice.reducer
