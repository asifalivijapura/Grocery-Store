import { createSlice } from "@reduxjs/toolkit";
import { loginData, popularProduct, productDetails, registerData } from "./action";


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
        },
        registerDetails: {
            isLoading: false,
            registerList: null,
            isError: false,
        },
        loginDetails: {
            isLoading: false,
            loginList: null,
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
                // console.log("action", action.payload);
                state.prodDetails.isLoading = false;
                state.prodDetails.detail = action.payload;
            })
            .addCase(productDetails.pending, (state, action) => {
                state.prodDetails.isLoading = true;
            })
            .addCase(productDetails.rejected, (state, action) => {
                state.prodDetails.isError = true;
            })
            //register Api 
            .addCase(registerData.fulfilled, (state, action) => {
                state.registerDetails.isLoading = false;
                state.registerDetails.registerList = action.payload;
            })
            .addCase(registerData.pending, (state, action) => {
                state.registerDetails.isLoading = true;
            })
            .addCase(registerData.rejected, (state, action) => {
                state.registerDetails.isError = true
            })
            // Login
            .addCase(loginData.fulfilled, (state, action) => {
                state.loginDetails.isLoading = false;
                state.loginDetails.loginList = action.payload;
            })
            .addCase(loginData.pending, (state, action) => {
                state.loginDetails.isLoading = true;
            })
            .addCase(loginData.rejected, (state, action) => {
                state.loginDetails.isError = true
            })
    }
})

export default homeDashboard.reducer