import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carrito: [],
  openDrawnerCarro: false,
  productos: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductos: (state , action) => {
      state.productos =  [...action.payload]
    },
    editProductos: (state , action) => {
      const elemento = action.payload;
      const idx =state.productos.findIndex(elemento);
      state.productos[idx] = action.payload;
    },
    toggleDrawnerCarro: (state) => {     
      state.openDrawnerCarro = !state.openDrawnerCarro
    },
    addCart: (state, action) => {
      state.carrito.push(action.payload)
  },
    initCart: (state, action) => {
      state.carrito = [...action.payload.carro]
  },
    deleteElementCart: (state, action) => {
          state.carrito = [state.carrito].filter(item => item.idProducto !== action.payload)
    }    
  },
})

// Action creators are generated for each case reducer function
export const { addCart ,deleteElementCart, toggleDrawnerCarro, initCart, addProductos} = cartSlice.actions

export default cartSlice.reducer