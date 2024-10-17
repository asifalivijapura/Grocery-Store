import { createSlice } from "@reduxjs/toolkit";
import { deleteFromData, postDataFromData } from "./action";

const adminDashboard = createSlice({
    name: 'admin',
    initialState: {
        dashboardData: {
            isLoading: false,
            data: null,
            isError: false,
        },
        deleteProd: {
            isLoading: false,
            deleteData: null,
            isError: false,
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postDataFromData.fulfilled, (state, action) => {
                console.log("action.payload", action.payload)
                state.dashboardData.isLoading = false;
                state.dashboardData.data = action.payload;
            })
            .addCase(postDataFromData.pending, (state, action) => {
                state.dashboardData.isLoading = true;
            })
            .addCase(postDataFromData.rejected, (state, action) => {
                state.dashboardData.isError = true;
            })

            // delete Data
            .addCase(deleteFromData.fulfilled, (state, action) => {
                state.deleteProd.isLoading = false
                state.deleteProd.deleteData = action.payload
            })
            .addCase(deleteFromData.pending, (state, action) => {
                state.deleteProd.isLoading = true
            })
            .addCase(deleteFromData.rejected, (state, action) => {
                state.deleteProd.isError = true
            })
    }
})

export default adminDashboard.reducer