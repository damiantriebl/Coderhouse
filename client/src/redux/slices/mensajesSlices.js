import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mensajes: [
    {
        titulo: "paaa q zapaaaa",
        nombre: 'javi',
        comentario: 'Hola mundo javi',
        fecha:"2020-01-01"
    
      }
  ],
}

export const mensajeSlice = createSlice({
  name: 'mensajes',
  initialState,
  reducers: {
    agregarMensaje: (state, action) => {
      [...state.mensajes, ...action.payload] 
    },
  },
})

// Action creators are generated for each case reducer function
export const { agregarMensaje } = mensajeSlice.actions

export default mensajeSlice.reducer