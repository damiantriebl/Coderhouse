import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carrito: [],
  openDrawnerCarro: false,

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleDrawnerCarro: (state) => {     
      state.openDrawnerCarro = !state.openDrawnerCarro
    },
    addCart: (state, action) => {
        state.carrito.push(action.payload);
    },
    deleteElementCart: (state, action) => {
        state.cart.filter((producto)=>{producto !== action})
    }    
  },
})

// Action creators are generated for each case reducer function
export const { addCart ,deleteElementCart, toggleDrawnerCarro} = cartSlice.actions

export default cartSlice.reducer