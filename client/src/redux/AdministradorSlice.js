import { createSlice } from '@reduxjs/toolkit'

const initialState = {  
  avatar: "",
  direccion: "",
  edad: 0,
  email: "",
  id: "",
  isAdmin: false
}

export const administradorSlice = createSlice({
  name: 'administrador',
  initialState,
  reducers: {
    toggleAdministrador: (state) => {
      state.isAdmin = !state.value
    },
  
    setCredentials: (state,action) => {
      state.avatar = action.payload?.avatar;
      state.direccion = action.payload?.direccion;
      state.edad = action.payload?.edad;
      state.id = action.payload?.id;
      state.isAdmin = action.payload?.isAdmin;
      state.email = action.payload?.email;
    },
    logOut: (state) => {
      console.log('estado', state, initialState)
      state.avatar = "";
      state.direccion =  "";
      state.edad = 0,
      state.email = "",
      state.id = "",
      state.isAdmin = false
    }
  },
})

export const { toggleAdministrador,   setCredentials, logOut } = administradorSlice.actions
export default administradorSlice.reducer

