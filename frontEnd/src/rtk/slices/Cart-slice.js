import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
      addToCart:(state,action)=>{
        const found = state.find((product)=>product.id === action.payload.id)
        if(found){
          found.quantity+=1
        }else {
          const clone = {...action.payload , quantity:1}
          state.push(clone)}
      },

      removeOneFromCart:(state,action)=>{
        const found = state.find((product)=>product.id === action.payload.id)
        if(found){
          if(found.quantity==1){
            return state.filter(product=>product.id !== action.payload.id)
          }
          found.quantity-=1
        }else {
          const clone = {...action.payload , quantity:1}
          state.push(clone)}
      },
      removeFromCart:(state,action)=>{
         
        return state.filter(product=>product.id !== action.payload.id)
      },

      clearCart:(state,action)=>{
        return []
      }
    },
    

})
export const {addToCart,removeOneFromCart , removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer