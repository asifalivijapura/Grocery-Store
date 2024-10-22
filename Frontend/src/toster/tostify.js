import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const reactTostyfy = createSlice({
    name: 'toster',
    initialState: {
        defaultToster: {}
    },

    reducers: {
        successTostify: (state, action) => {
            console.log("action in toster", action)
            toast.success(action.payload, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        },
        errorTostify: (state, action) => {
            // console.log("action in toster", action)
            toast.error(action.payload, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        },
    },
    extraReducers: () => { }
})

export const { successTostify, errorTostify } = reactTostyfy.actions;

export default reactTostyfy.reducer;