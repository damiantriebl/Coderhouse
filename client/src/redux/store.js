import { configureStore } from '@reduxjs/toolkit'
import { mensajeSlice } from './slices/mensajesSlices'

export const store = configureStore({
  reducer: {
    mensajes: mensajeSlice
  },
})