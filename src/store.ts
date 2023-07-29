import { configureStore } from "@reduxjs/toolkit"
import sensorSlice from "./slices/sensorSlice"

const store = configureStore({
    reducer: {
      sensors: sensorSlice
    },
  })

export default store;


export type RootState = ReturnType<typeof store.getState>