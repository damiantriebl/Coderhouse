import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  userId: 1
}

export const administradorSlice = createSlice({
  name: 'administrador',
  initialState,
  reducers: {
    toggleAdministrador: (state) => {
      state.value = !state.value
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    }
  
  
  },
})

// Action creators are generated for each case reducer function
export const { toggleAdministrador, setUserId } = administradorSlice.actions

export default administradorSlice.reducer