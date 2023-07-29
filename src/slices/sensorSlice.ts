import { createSlice } from '@reduxjs/toolkit'
import Sensor from '../interfaces/Sensor';

export const sensorSlice = createSlice({
  name: 'sensors',
  initialState: {
    value: [] as Sensor[],
  },
  reducers: {
    setSensors: (state, action) =>{
        state.value = structuredClone(action.payload); 
    }
  },
})

export const { setSensors } = sensorSlice.actions

export default sensorSlice.reducer