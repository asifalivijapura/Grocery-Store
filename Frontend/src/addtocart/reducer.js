import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./action";


const userAddToCart = createSlice({
    name: 'addToCart',
    initialState: {
        addToCartHomePage: {
            isLoading: false,
            data: null,
            isError: false,
        }
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.addToCartHomePage.isLoading = false;
                state.addToCartHomePage.data = action.payload;
            })
            .addCase(addToCart.pending, (state, action) => {
                state.addToCartHomePage.isLoading = true;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.addToCartHomePage.isError = true;
            })
    }
})

export default userAddToCart.reducer