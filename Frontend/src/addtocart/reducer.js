import { createSlice } from "@reduxjs/toolkit";
import { addToCart, viewCartDetails } from "./action";


const userAddToCart = createSlice({
    name: 'addToCart',
    initialState: {
        addToCartHomePage: {
            isLoading: false,
            data: null,
            isError: false,
        },
        viewcartData: {
            isLoading: false,
            cartData: null,
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
            // viewCartData
            .addCase(viewCartDetails.fulfilled, (state, action) => {
                state.viewcartData.isLoading = false;
                state.viewcartData.cartData = action.payload;
            })
            .addCase(viewCartDetails.pending, (state, action) => {
                state.viewcartData.isLoading = true;
            })
            .addCase(viewCartDetails.rejected, (state, action) => {
                state.viewcartData.isError = true;
            })
    }
})

export default userAddToCart.reducer