import { configureStore } from '@reduxjs/toolkit'
import AdministradorSlice from './AdministradorSlice'
import carroSlice from './carroSlice'
import EditorSlice from './EditorSlice'
import  ErrorSlice from './ErrorSlice'

export const store = configureStore({
  reducer: {
    err: ErrorSlice,
    administrador: AdministradorSlice,
    editor: EditorSlice,
    carro: carroSlice
  },
})