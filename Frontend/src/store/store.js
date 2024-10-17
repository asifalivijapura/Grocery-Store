import { configureStore } from "@reduxjs/toolkit";
import homeDashboard from '../reducer/reducer'
import adminDashboard from '../adminReducer/reducer'

export const store = configureStore({
    reducer: {
        home: homeDashboard,
        admin: adminDashboard
    }
})