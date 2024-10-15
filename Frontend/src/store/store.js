import { configureStore } from "@reduxjs/toolkit";
import homeDashboard from '../reducer/reducer'

export const store = configureStore({
    reducer: {
        home: homeDashboard
    }
})