import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts= createAsyncThunk("ProductReducer/fetchproducts",async()=>{
   const res= await fetch('http://localhost:9000/products')
   const data =  await res.json()
   //console.log(data);
   return data
})
const ProductReducer= createSlice({
    initialState:[],
    name:"ProductReducer",
    reducers:{

    },
    extraReducers:(builder)=>{
     builder.addCase(fetchProducts.fulfilled, (state, action)=>{
        return action.payload
     })
    }
})

export default ProductReducer.reducer