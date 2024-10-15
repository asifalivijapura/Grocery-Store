import { createSlice } from "@reduxjs/toolkit";
import { popularProduct, productDetails } from "./action";


const homeDashboard = createSlice({
    name: 'home',
    initialState: {
        popularProductData: {
            isLoading: false,
            data: null,
            isError: false,
        },
        prodDetails: {
            isLoading: false,
            detail: null,
            isError: false,
        }
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            // popular products 
            .addCase(popularProduct.fulfilled, (state, action) => {
                // console.log("action", action.payload);
                state.popularProductData.isLoading = false;
                state.popularProductData.data = action.payload;
            })
            .addCase(popularProduct.pending, (state, action) => {
                state.popularProductData.isLoading = true;
            })
            .addCase(popularProduct.rejected, (state, action) => {
                state.popularProductData.isError = true;
            })
            // Product details
            .addCase(productDetails.fulfilled, (state, action) => {
                console.log("action", action.payload);
                state.prodDetails.isLoading = false;
                state.prodDetails.detail = action.payload;
            })
            .addCase(productDetails.pending, (state, action) => {
                state.prodDetails.isLoading = true;
            })
            .addCase(productDetails.rejected, (state, action) => {
                state.prodDetails.isError = true;
            })
    }
})

export default homeDashboard.reducer